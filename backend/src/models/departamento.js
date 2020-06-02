const queryInsert = {
    text: 'INSERT INTO Departamento (codigo_dept, nome_dept, classificacao, gerente) VALUES ($1, $2, $3, $4)'
}

const queryFindByName = {
    text: 'SELECT * FROM Departamento WHERE nome_dept = $1'
}

const queryFindByNameAndCod = {
    text: 'SELECT * FROM Departamento WHERE codigo_dept = $1 AND nome_dept = $2'
}

const queryDeleteByName = {
    text: 'DELETE FROM Departamento WHERE nome_dept = $1'
}

module.exports = {
    queryInsert,
    queryFindByName,
    queryFindByNameAndCod,
    queryDeleteByName
}