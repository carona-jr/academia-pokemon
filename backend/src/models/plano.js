const queryInsert = {
    text: 'INSERT INTO Plano (cpf, codigo_plano, valor, data_de_inicio, duracao) VALUES ($1, $2, $3, $4, $5)'
}

const queryFindByCpf = {
    text: 'SELECT * FROM Plano WHERE cpf = $1'
}

const queryDeleteByCpf = {
    text: 'DELETE FROM Plano WHERE cpf = $1'
}

module.exports = {
    queryInsert,
    queryFindByCpf,
    queryDeleteByCpf
}