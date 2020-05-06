const queryInsertTreinador = {
    text : 'INSERT INTO Treinador (cpf, cpts, salario_base, instituto) VALUES ($1, $2, $3, $4)',
}


const queryFindByCpf = {
    text: 'SELECT * FROM Treinador WHERE cpf = $1'
}

const queryDeleteByCpf = {
    text: 'DELETE FROM Treinador WHERE cpf = $1'
}

module.exports = {
    queryInsertTreinador,
    queryFindByCpf,
    queryDeleteByCpf
}