import React, { useState, useEffect } from 'react'
import imagemPokemon from '../assets/images/54.png'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import searchImg from '../services/img'
import Table from 'react-bootstrap/Table'

import { api, apiPokemon } from '../services/api'

export default function PokemonList() {
    const [userPokemons, setUserPokemons] = useState()
    const pok = ['psyduck', 'pikachu']

    async function loadPokemons() {
        const userCpf = localStorage.getItem('cpf')
        console.log(userCpf)
        const userPokemons = await api.get('/pokemon/all', {
            headers: {
                Authorization: 'Bearer ' + userCpf
            }
        })
        setUserPokemons(userPokemons.data)
        // userPokemons.map(pokemon => setPokemonsNames([...pokemonsNames, pokemon.raca]))
        // console.log(pokemonsNames)
        // await console.log(searchImg(pok))
    }

    useEffect(() => {
        loadPokemons()
    }, [])

    return (
        <div>
            {userPokemons && userPokemons.length > 0 ? (
                <Container className="w-100 m-0 p-0">
                    <Table className="w-50 m-0 p-0" striped bordered hover responsive>
                        <thead>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Nível</th>
                        </thead>
                        {
                            userPokemons.map(pokemon => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td style={{ verticalAlign: 'middle', textAlign: 'center'}}>
                                                <img className="w-50" src={imagemPokemon} alt="teste" thumbnail />
                                            </td>
                                            <td style={{ verticalAlign: 'middle', textAlign: 'center', textTransform: 'capitalize', textSize:'25px'}}>
                                                {pokemon.nome}
                                            </td>
                                            <td style={{ verticalAlign: 'middle', textAlign: 'center',textSize:'25px'}}>
                                                {pokemon.nivel}
                                            </td>
                                        </tr>
                                    </tbody>

                                )
                            })
                        }
                    </Table>
                </Container>

            ) : (
                    <h6>Você ainda não tem pokemons registrados :(</h6>
                )
            }
        </div >
    )
}