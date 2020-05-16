import React, { useState, useEffect } from 'react'
import imagemPokemon from '../assets/images/54.png'
import Container from 'react-bootstrap/Container'
import searchImg from '../services/img'
import Table from 'react-bootstrap/Table'

import { api } from '../services/api'

export default function PokemonList() {
    const [userPokemons, setUserPokemons] = useState()
    let pokemonList = []
    const [imgPokemon, setImgPokemon] = useState({})

    async function loadPokemons() {
        const userCpf = localStorage.getItem('cpf')
        const response = await api.get('/pokemon/top', {
            headers: {
                Authorization: 'Bearer ' + userCpf
            }
        })
        setUserPokemons(response.data)
        for(let i = 0; i < response.data.length; i++) {
            pokemonList.push(`${response.data[i].raca}`)
        }
        const pokemonsImg = await searchImg(pokemonList)

        setImgPokemon(pokemonsImg)
    }

    
    useEffect(() => {
        loadPokemons()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {userPokemons && imgPokemon && userPokemons.length > 0 ? (
                <Container className="w-100 m-0 p-0">
                    <Table className="w-50 m-0 p-0" striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th style={{ verticalAlign: 'middle', textAlign: 'center' }}>#</th>
                                <th style={{ verticalAlign: 'middle', textAlign: 'center' }}>Nome</th>
                                <th style={{ verticalAlign: 'middle', textAlign: 'center' }}>Raça</th>
                                <th style={{ verticalAlign: 'middle', textAlign: 'center' }}>Nível</th>
                            </tr>
                        </thead>
                        {
                            userPokemons.map(pokemon => {
                                return (
                                    <tbody key={pokemon.codigo_pokemon}>
                                        <tr>
                                            <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                                                <img className="w-50" src={imgPokemon[pokemon.raca] || imagemPokemon} alt="teste" />
                                            </td>
                                            <td style={{ verticalAlign: 'middle', textAlign: 'center', textTransform: 'capitalize', textSize: '25px' }}>
                                                {pokemon.nome}
                                            </td>
                                            <td style={{ verticalAlign: 'middle', textAlign: 'center', textTransform: 'capitalize', textSize: '25px' }}>
                                                {pokemon.raca}
                                            </td>
                                            <td style={{ verticalAlign: 'middle', textAlign: 'center', textSize: '25px' }}>
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