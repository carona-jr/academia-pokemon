const queryInsertPokemon = {
    text: 'INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, cpf) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
}

const queryFindPokemonByCpf = {
    text: 'SELECT * FROM Pokemon WHERE cpf = $1'
}

const queryFindPokemonByCpfAndName = {
    text: 'SELECT * FROM Pokemon WHERE cpf = $1 AND nome = $2'
}

const queryDeleteByCpf = {
    text: 'DELETE FROM Pokemon WHERE cpf = $1'
}

const queryDeletePokemonByName = {
    text: 'DELETE FROM Pokemon WHERE cpf = $1 AND nome = $2'
}

module.exports = {
    queryInsertPokemon,
    queryFindPokemonByCpf,
    queryFindPokemonByCpfAndName,
    queryDeleteByCpf,
    queryDeletePokemonByName
}
