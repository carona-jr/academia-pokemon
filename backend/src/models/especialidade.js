const queryInsert = {
    text : 'INSERT INTO Especialidade (cpf, especialidade) VALUES ($1, $2)',
}


const queryFindByCpf = {
    text: 'SELECT * FROM Usuario WHERE cpf = $1'
}

const queryDeleteByCpf = {
    text: 'DELETE FROM Usuario WHERE cpf = $1'
}

module.exports = {
    queryInsert,
    queryFindByCpf,
    queryDeleteByCpf
}