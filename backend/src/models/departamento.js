const queryInsert = {
    text: 'INSERT INTO Departamento (codigo_dept, nome, classificacao, gerente) VALUES ($1, $2, $3, $4)'
}

const queryFindByName = {
    text: 'SELECT * FROM Departamento WHERE nome = $1'
}

const queryFindByNameAndCod = {
    text: 'SELECT * FROM Departamento WHERE codigo_dept = $1 AND nome = $2'
}

const queryDeleteByName = {
    text: 'DELETE FROM Departamento WHERE nome = $1'
}

module.exports = {
    queryInsert,
    queryFindByName,
    queryFindByNameAndCod,
    queryDeleteByName
}