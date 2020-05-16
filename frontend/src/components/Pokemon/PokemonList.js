import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-loading'

import imagemPokemon from '../../assets/images/ditto.png'
import searchImg from '../../services/img'
import { api } from '../../services/api'

export default function PokemonList() {
    let pokemonList = []
    const [userPokemons, setUserPokemons] = useState()
    const [responseData, setResponseData] = useState()
    const [imgPokemon, setImgPokemon] = useState({})

    async function loadPokemons() {
        try {
            const userCpf = localStorage.getItem('cpf')
            const response = await api.get('/pokemon/top', {
                headers: {
                    Authorization: 'Bearer ' + userCpf
                }
            })
            setUserPokemons(response.data)
            for (let i = 0; i < response.data.length; i++) {
                pokemonList.push(`${response.data[i].raca}`)
            }
            const pokemonsImg = await searchImg(pokemonList)

            setImgPokemon(pokemonsImg)
        } catch (e) {
            setResponseData('empty')
        }
    }


    useEffect(() => {
        loadPokemons()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {userPokemons && imgPokemon && userPokemons.length > 0 ? (
                <Container className="w-100 m-0 p-0">
                    <Table className="m-0 p-0" striped bordered hover responsive>
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
                                                <img className="w-75" src={imgPokemon[pokemon.raca] || imagemPokemon} alt="teste" />
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
            ) : (responseData === 'empty') ? (
                <h6>Você ainda não tem pokemons registrados :(</h6>
            ) : (
                        <div className="d-flex justify-content-center my-5 py-5" >
                            <Spinner type="bars" width={'32px'} height={'32px'} color={'green'} />
                        </div>
                    )
            }
        </div >
    )
}