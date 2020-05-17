const { apiPokemon } = require('../services/api')

const search = async (pokemon, obj) => {
    if (!obj.hasOwnProperty(pokemon)) {
        try {
            let response = await apiPokemon.get(`/${pokemon.toLowerCase()}`)
            return response.data.sprites.front_default
        } catch(e) {
            return undefined
        }
    }
    return obj[pokemon]
}

const searchImg = async (pokemons) => {
    let obj = JSON.parse(localStorage.getItem('pokemons')) || {}
    let list
    try {
        list = await Promise.all(pokemons.map(pokemon => search(pokemon, obj)))
    } catch (e) {
        return obj
    }

    for(let i = 0; i < pokemons.length; i++) {
        obj[pokemons[i]] = list[i]
    }
    localStorage.setItem('pokemons', JSON.stringify(obj))
    return obj
}

export { searchImg }