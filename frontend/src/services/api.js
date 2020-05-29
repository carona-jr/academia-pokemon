import axios from 'axios'

const api = axios.create({
    // baseURL: 'https://carona-backend-academia.herokuapp.com'
    baseURL: 'http://localhost:3333'
})

const apiPokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export { api, apiPokemon }