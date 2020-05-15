import axios from 'axios'

const api = axios.create({
    baseURL: 'https://carona-backend-academia.herokuapp.com/'
})

export { api }