const { apiPokemon } = require('../services/api')

const search = async (pokemon, obj) => {
    if (!obj.hasOwnProperty(pokemon)) {
        let response = await apiPokemon.get(`/${pokemon.toLowerCase()}`)
        return response.data.sprites.front_default
    }
    return obj[pokemon]
}

const searchImg = async (pokemons) => {
    let obj = JSON.parse(localStorage.getItem('pokemons')) || {}
    const list = await Promise.all(pokemons.map(pokemon => search(pokemon, obj)))

    for(let i = 0; i < pokemons.length; i++) {
        obj[pokemons[i]] = list[i]
    }
    localStorage.setItem('pokemons', JSON.stringify(obj))
    return obj
    
}

module.exports = searchImg