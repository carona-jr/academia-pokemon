/* 
    A função searchByKeyAndUpdate serve para alterar algum dado em qualquer tabela, informando a chave e outros dados

    *** USO ***

    searchByKeyAndUpdate(
        CORPO DA REQUISIÇÃO COM OS DADOS PARA ALTERAR, 
        CAMPO A SER PROCURADO (CHAVE), 
        OBJETO COM O TEXT (MODELS), 
        VETOR DOS VALORES DO TIPO INTEGER, 
        VETOR DAS ALTERAÕES PERMITIDAS
    )

    A função retorna uma string no padrão correto para ser inserida na consulta
    ex. 'UPDATE Table SET column1 = value2, column = 'abc' WHERE key = '123'
*/

const pool = require('../db/elephant-sql')

// Verfica se o atributo é inteiro com o vetor de inteiros passados por parametro
const verifyInteger = (arr, attribute) => {
    return arr.every(value => attribute !== value)
}

// Verifica se o update é possível
const verifyAllowed = (arr, allowedUpdates) => {
    return arr.every(update => allowedUpdates.includes(update))
}

const searchByKeyAndUpdate = (data, keyword, objValues, arrInt = [], allowedUpdates = []) => {
    return new Promise(async (resolve, reject) => {

        // Verifica se o update é permitido
        const dataKeys = Object.keys(data)
        if (!verifyAllowed(dataKeys, allowedUpdates))
            reject({ erro: 'Não foi possível realizar o update, uma das alterações não é permitida' })

        // Realiza a busca no banco de dados, por cpf, do usuário passado por parametro
        objValues.values = [keyword]
        const user = await pool.query(objValues)

        // Cria um objeto com os valores diferentes daqueles armazenados no banco, verificando, assim, se o dado foi alterado ou não
        let update = {}
        const userKeys = Object.keys(user.rows[0])
        userKeys.map(value => data[value] !== user[value] ? update[value] = data[value] : false)

        // Concatena o comando UPDATE com os valores alterados na requisição, o restante é ignorado
        const updateKeys = Object.keys(update)
        let str = 'UPDATE Usuario SET '
        updateKeys.map(value => {
            let newStr
            if (verifyInteger(arrInt, value))
                newStr = `${value} = '${update[value]}', `
            else {
                newStr = `${value} = ${update[value]}, `
            }
            str += newStr
        })

        // Concatena o WHERE a fim de alterar somente o cpf especificado
        let updateStr = str.split('').slice(0, str.length - 2).join('')
        updateStr += ` WHERE cpf = '${keyword}'`
        resolve(updateStr)
    })
}

module.exports = searchByKeyAndUpdate