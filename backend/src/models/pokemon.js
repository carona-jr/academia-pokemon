const queryInsertPokemon = {
    text: 'INSERT INTO Pokemon (nome, raca, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, data_cadastro, cpf) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)'
}

const queryFindPokemonByCpf = {
    text: 'SELECT * FROM Pokemon WHERE cpf = $1'
}

const queryFindPokemonByCpfTopByNivel = {
    text: 'SELECT * FROM Pokemon WHERE cpf = $1 ORDER BY nivel DESC LIMIT 3'
}

const queryFindPokemonByCpfTopByData = {
    text: 'SELECT * FROM Pokemon WHERE cpf = $1 ORDER BY data_cadastro DESC LIMIT 3'
}

const queryFindPokemonByCpfCountByType = {
    text: 'SELECT classificacao, count(classificacao) as quantidade FROM Pokemon WHERE cpf = $1 GROUP BY classificacao'
}

const queryFindPokemonByCountByDate = {
    text: 'SELECT extract(year from data_cadastro) as year, extract(month from data_cadastro) as month, extract(day from data_cadastro) as day, count(codigo_pokemon) as count FROM Pokemon WHERE cpf = $1 AND data_cadastro >= $2 GROUP BY 1, 2, 3'
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
    queryDeletePokemonByName,
    queryFindPokemonByCpfTopByNivel,
    queryFindPokemonByCpfTopByData,
    queryFindPokemonByCpfCountByType,
    queryFindPokemonByCountByDate
}
