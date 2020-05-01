const queryInsert = {
    text : 'INSERT INTO Trabalha (codigo_dept, cpf) VALUES ($1, $2)',
}

const queryFIndByCodigoDept = {
    text: 'SELECT * FROM Trabalha WHERE codigo_dept = $1'
}

const queryDeleteByCodigoDept = {
    
    text: 'DELETE FROM Trabalha WHERE codigo_dept = $1'
}

module.exports = {
    queryInsert,
    queryDeleteByCodigoDept,
    queryFIndByCodigoDept
}