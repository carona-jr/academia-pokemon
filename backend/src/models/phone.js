const queryInsertPhone = {
    text : 'INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ($1, $2)',
}

const queryFindByCpf = {
    text: 'SELECT * FROM Telefone WHERE cpf = $1'
}

const queryFindByCpfAndPhone = {
    text: 'SELECT * FROM Telefone WHERE cpf = $1 AND numero_de_telefone = $2'
}

const queryDeleteByCpf = {
    text: 'DELETE FROM Telefone WHERE cpf = $1'
}

const queryDeleteOnePhone = {
    text: 'DELETE FROM Telefone WHERE (cpf = $1 AND numero_de_telefone = $2)'
}

module.exports = {
    queryInsertPhone,
    queryDeleteByCpf,
    queryFindByCpf,
    queryFindByCpfAndPhone,
    queryDeleteOnePhone
}