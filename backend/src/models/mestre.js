const queryInsertMestre = {
    text : 'INSERT INTO Mestre (cpf) VALUES ($1)'
}

const queryFindByCpf = {
    text: 'SELECT * FROM Mestre WHERE cpf = $1'
}

const queryDeleteByCpf = {
    text: 'DELETE FROM Mestre WHERE cpf = $1'
}

module.exports = {
    queryInsertMestre,
    queryFindByCpf,
    queryDeleteByCpf
}