const queryInsert = {
    text : 'INSERT INTO Pokemon (codigo_pokemon, cpf, nome, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
}

const queryFIndByCodigoPokemon = {
    text: 'SELECT * FROM Pokemons WHERE codigo_pokemon = $1'
}

const queryDeleteByCodigoPokemon = {
    
    text: 'DELETE FROM Pokemon WHERE cpf = $1'
}

module.exports = {
    queryDeleteByCodigoPokemon,
    queryFIndByCodigoPokemon
}