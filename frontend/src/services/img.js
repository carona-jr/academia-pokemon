const { apiPokemon } = require('../services/api')

const search = async (pokemon) => {
    console.log(pokemon)
    let response = await apiPokemon.get(`/${pokemon.toLowerCase()}`)
    return response.data.sprites.front_default
}

const searchImg = (pokemons) => {
    console.log(pokemons)
    return Promise.all(pokemons.map(pokemon => search(pokemon)))
}

module.exports = searchImg