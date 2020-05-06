const pool = require('../db/elephant-sql')

const queryInsertUser = {
    text: 'INSERT INTO Usuario (cpf, nome, rg, data_nascimento, rua, num_casa, bairro, cidade, estado, cep, e_mail, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',

}

const queryFindByCpf = {
    text: 'SELECT * FROM Usuario WHERE cpf = $1'
}

const queryDeleteByCpf = {
    text: 'DELETE FROM Usuario WHERE cpf = $1'
}

module.exports = {
    queryInsertUser,
    queryFindByCpf,
    queryDeleteByCpf
}