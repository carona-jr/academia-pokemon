const { apiPokemon } = require('../services/api')

const search = async (pokemon, obj, err) => {
    if (!obj.hasOwnProperty(pokemon)) {
        if (err.hasOwnProperty(`${pokemon}Err`)) {
            localStorage.setItem('pokemonsImgError', JSON.stringify(err))
            return undefined
        }
        console.log(pokemon)
        try {
            let response = await apiPokemon.get(`/${pokemon.toLowerCase()}`)
            return response.data.sprites.front_default
        } catch(e) {
            err[`${pokemon}Err`] = pokemon
            localStorage.setItem('pokemonsImgError', JSON.stringify(err))
            return undefined
        }
    }
    return obj[pokemon]
}   

const searchImg = async (pokemons) => {
    let obj = JSON.parse(localStorage.getItem('pokemons')) || {}
    let error = JSON.parse(localStorage.getItem('pokemonsImgError')) || {}
    let list
    try {
        list = await Promise.all(pokemons.map(pokemon => search(pokemon, obj, error)))
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