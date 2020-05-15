import axios from 'axios'

const api = axios.create({
    baseURL: 'https://carona-backend-academia.herokuapp.com'
})

const apiPokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export { api, apiPokemon }