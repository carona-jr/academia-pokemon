const queryInsert = {
    text: 'INSERT INTO Aprimora (codigo_pokemon, cpf, hora_de_entrada, hora_de_saida) VALUES ($1, $2, $3, $4)'
}

const queryFindByCodigo_pokemon = {
    text: 'SELECT * FROM Aprimora WHERE codigo_pokemon = $1'
}

const queryFindByCpf = {
    text: 'SELECT * FROM Aprimora WHERE cpf = $1'
}

const queryFindByCodigoDeptAndHour = {
    text: 'SELECT * FROM Aprimora WHERE codigo_pokemon = $1 AND cpf = $2 AND hora_de_entrada = $3'
}

const queryFindByCodPokemonAndCpfAndHour = {
    text: 'SELECT * FROM Aprimora WHERE codigo_pokemon = $1 AND cpf = $2 AND hora_de_entrada = $3'
}

const queryDeleteByCodigo_pokemon = {
    text: 'DELETE FROM Aprimora WHERE codigo_pokemon = $1'
}

const queryDeleteByCodPokemonAndCpfAndHour = {
    text: 'DELETE FROM Aprimora WHERE codigo_pokemon = $1 AND cpf = $2 AND hora_de_entrada = $3'
}

module.exports = {
    queryInsert,
    queryFindByCodigo_pokemon,
    queryFindByCpf,
    queryFindByCodigoDeptAndHour,
    queryFindByCodPokemonAndCpfAndHour,
    queryDeleteByCodigo_pokemon,
    queryDeleteByCodPokemonAndCpfAndHour
}