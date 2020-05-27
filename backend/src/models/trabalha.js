
const queryInsert = {
    text: 'INSERT INTO Trabalha (codigo_dept, cpf) VALUES ($1, $2)'
}

const queryFindByCodigoDept = {
    text: 'SELECT * FROM Trabalha WHERE codigo_dept = $1'
}

const queryFindByCpf = {
    text: 'SELECT * FROM Trabalha as t INNER JOIN Departamento as d ON d.codigo_dept = t.codigo_dept WHERE t.cpf = $1'
}

const queryFindByCodigoDeptAndCpf = {
    text: 'SELECT * FROM Trabalha WHERE codigo_dept = $1 AND cpf = $2'
}

const queryDeleteByCodigoDept = {
    text: 'DELETE FROM Trabalha WHERE codigo_dept = $1 AND cpf = $2'
}

module.exports = {
    queryInsert,
    queryFindByCodigoDept,
    queryFindByCodigoDeptAndCpf,
    queryDeleteByCodigoDept,
    queryFindByCpf
}