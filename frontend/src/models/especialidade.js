const queryInsert = {
    text: 'INSERT INTO Especialidade (cpf, especialidade) VALUES ($1, $2)'
}

const queryFindByCpf = {
    text: 'SELECT * FROM Especialidade WHERE cpf = $1'
}

const queryFindByCpfAndEspecialidade = {
    text: 'SELECT * FROM Especialidade WHERE cpf = $1 AND especialidade = $2'
}

const queryDeleteByCpf = {
    text: 'DELETE FROM Especialidade WHERE cpf = $1'
}

const queryDeleteOne = {
    text: 'DELETE FROM Especialidade WHERE cpf =$1 AND especialidade = $2'
}

module.exports = {
    queryInsert,
    queryFindByCpf,
    queryFindByCpfAndEspecialidade,
    queryDeleteByCpf,
    queryDeleteOne
}