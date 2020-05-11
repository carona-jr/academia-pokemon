const queryInsert = {
    text : 'INSERT INTO Trabalha (codigo_dept, cpf) VALUES ($1, $2)',
}

const queryFindByCodigoDept = {
    text: 'SELECT * FROM Trabalha WHERE codigo_dept = $1'
}

const queryFindByCodigoDeptAndCpf = {
    text: 'SELECT * FROM Trabalha WHERE codigo_dept = $1 AND cpf = $2'
}

const queryDeleteByCodigoDept = {
    
    text: 'DELETE FROM Trabalha WHERE codigo_dept = $1 AND cpf = $2'
}

module.exports = {
    queryInsert,
    queryDeleteByCodigoDept,
    queryFindByCodigoDept,
    queryFindByCodigoDeptAndCpf,
}