/* 
    A função searchByKeyAndUpdate procura alguma coluna e altera seu valor de acordo com a chave passada por parâmetro.
    Se o parâmetro de busca for uma data, colocar o campo da data no vetor de inteiros.

    *** EXEMPLO ***

    searchByKeyAndUpdate(
        OBJECT              corpo da requisição             (req.body), 
        STRING              nome da tabela                  ('Pokemon'),
        ARRAY               nomes das colunas para busca    (['cpf']),
        ARRAY               valores das colunas para busca  (['122455']) 
        OBJECT              modelo do objeto de UPDATE      (queryFindByCpf), 
        ARRAY               alterações permitidas           (['nome', 'rua', 'cep']),
        ARRAY   OPCIONAL    colunas com tipo númerico       (['num_cara', 'cep'])
    )

    A função retorna uma string no padrão correto para ser inserida na consulta
    ex. 'UPDATE Table SET column1 = value2, column = 'abc' WHERE key = '123'
*/

const pool = require('../db/elephant-sql')

// Verifica se o update é possível
const verifyAllowed = (arr, allowedUpdates) => {
    return arr.every(update => allowedUpdates.includes(update))
}

const searchByKeyAndUpdate = (data, tableName, key, keyword, objValues, allowedUpdates, arrInt = []) => {
    return new Promise(async (resolve, reject) => {
        if (data.searchTerm)
            delete data.searchTerm

        // Verifica se o update é permitido
        const dataKeys = Object.keys(data)
        if (!verifyAllowed(dataKeys, allowedUpdates))
            reject({
                erro: 'Não foi possível realizar o update, uma das alterações não é permitida',
                valores_enviados: data,
                valores_permitidos: allowedUpdates,
                valores_inteiros: arrInt,
                chave: key,
                valor: keyword,
                obj: objValues
            })

        // Realiza a busca no banco de dados, pela key fornecida, do usuário passado por parametro
        try {
            objValues.values = keyword
            const user = await pool.query(objValues)

            // Cria um objeto com os valores diferentes daqueles armazenados no banco, verificando, assim, se o dado foi alterado ou não
            let objForUpdates = {}
            const userKeys = Object.keys(user.rows[0])
            userKeys.map(value => data[value] !== user[value] ? objForUpdates[value] = data[value] : false)

            // Concatena o comando UPDATE com os valores alterados na requisição, o restante é ignorado
            const updateKeys = Object.keys(objForUpdates)
            let createNewQuery = `UPDATE ${tableName} SET `
            updateKeys.map(value => {
                let setColumnsToUpdate
                if (!arrInt.includes(value))
                    setColumnsToUpdate = `${value} = '${objForUpdates[value]}', `
                else {
                    setColumnsToUpdate = `${value} = ${objForUpdates[value]}, `
                }
                createNewQuery += setColumnsToUpdate
            })

            // Concatena o WHERE a fim de alterar somente pela chave fornecida especificado
            let queryToUpdate = createNewQuery.split('').slice(0, createNewQuery.length - 2).join('')

            for (let i = 0; i < key.length; i++) {
                if (i === 0) {
                    if(!arrInt.includes(key))
                        queryToUpdate += ` WHERE ${key[i]} = '${keyword[i]}'`
                    else {
                        queryToUpdate += ` WHERE ${key[i]} = ${keyword[i]}`
                    }
                } else {
                    if(!arrInt.includes(key))
                        queryToUpdate += ` AND ${key[i]} = '${keyword[i]}'`
                    else {
                        queryToUpdate += ` AND ${key[i]} = ${keyword[i]}`
                    }
                }
            }

            // console.log(queryToUpdate)
            // Realiza o update no banco de dados
            const updateUser =  await pool.query(queryToUpdate)
            resolve({ 
                sucess: true,
                command: updateUser.command,
                rows: updateUser.rowCount
            })
        } catch (e) {
            reject({
                erro: `Não foi possível realizar o update, uma das alterações não foi realizada pelo banco`,
                valores_enviados: data,
                valores_permitidos: allowedUpdates,
                valores_inteiros: arrInt,
                chave: key,
                valor: keyword,
                obj: objValues
            })
        }
    })
}

module.exports = searchByKeyAndUpdate