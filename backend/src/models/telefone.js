const queryInsert = {
    text : 'INSERT INTO Telefone (cpf, numero_de_telefone) VALUES ($1, $2)',
}

const queryFIndByCpf = {
    text: 'SELECT * FROM Telefone WHERE cpf = $1'
}

const queryDeleteByCpf = {
    
    text: 'DELETE FROM Telefone WHERE cpf = $1'
}

module.exports = {
    queryInsert,
    queryDeleteByCpf,
    queryFIndByCpf
}