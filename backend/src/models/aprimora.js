const queryInsert = {
    text : 'INSERT INTO Aprimora (codigo_pokemon, cpf, dia, hora_de_entrada, hora_de_saida) VALUES ($1, $2, $3, $4, $5)',
}

const queryFindByCodigo_pokemon = {
    text: 'SELECT * FROM Aprimora WHERE codigo_pokemon = $1 '
}

const queryDeleteByCodigo_pokemon = {
    text: 'DELETE FROM Aprimora WHERE codigo_pokemon = $1'
}

module.exports = {
    queryInsert,
    queryFindByCodigo_pokemon,
    queryDeleteByCodigo_pokemon
}