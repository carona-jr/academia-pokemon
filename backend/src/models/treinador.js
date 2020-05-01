const queryInsert = {
    text : 'INSERT INTO Treinador (cpf, cpts, salario_base, instituto) VALUES ($1, $2, $3, $4)',
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