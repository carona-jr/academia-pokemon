const queryInsert = {
    text : 'INSERT INTO Plano (codigo_plano, nome, valor, data_de_inicio, data_de_termino) VALUES ($1, $2, $3, $4, $5)',
}

const queryFindByCodigoPlano = {
    text: 'SELECT * FROM Plano WHERE codigo_plano = $1'
}

const queryDeleteByCodigoPlano = {
    text: 'DELETE FROM Plano WHERE codigo_plano = $1'
}

module.exports = {
    queryInsert,
    queryFindByCodigoPlano,
    queryDeleteByCodigoPlano
}