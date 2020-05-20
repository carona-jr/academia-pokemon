import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-loading'
import imagemPokemon from '../../assets/images/ditto.png'
import { searchImg } from '../../services/img'
import { api } from '../../services/api'
import Navlink from 'react-bootstrap/Navlink'
import editImg from '../../assets/icons/edit-black-24dp.svg'
import deleteImg from '../../assets/icons/delete-black-24dp.svg'

export default function PokemonList({ route, displayItem, displayText, showEditAndDelete }) {
    let pokemonList = []
    const [userPokemons, setUserPokemons] = useState()
    const [responseData, setResponseData] = useState()
    const [imgPokemon, setImgPokemon] = useState({})

    async function loadPokemons() {
        try {
            const userCpf = localStorage.getItem('cpf')
            const response = await api.get(route, {
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
                <div className="w-100 m-0 p-0">
                    <Table className="m-0 p-0" striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th style={{ verticalAlign: 'middle', textAlign: 'center' }}>#</th>
                                {
                                    displayText.map(item => <th style={{ verticalAlign: 'middle', textAlign: 'center' }} key={item}>{item}</th>)
                                }
                                {
                                    showEditAndDelete ? (
                                        <th style={{ verticalAlign: 'middle', textAlign: 'center' }}>#</th>
                                    ) : (
                                            <></>
                                        )
                                }

                            </tr>
                        </thead>
                        {
                            userPokemons.map(pokemon => {
                                return (
                                    <tbody key={pokemon.codigo_pokemon}>
                                        <tr>
                                            <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                                                <img className="w-sm-100 w-md-50" src={imgPokemon[pokemon.raca] || imagemPokemon} alt="teste" />
                                            </td>
                                            {
                                                displayItem.map(item =>
                                                    <td style={{ verticalAlign: 'middle', textAlign: 'center', textSize: '25px', padding: 0 }} key={item}>
                                                        <span style={{ textTransform: 'capitalize' }}>{pokemon[item]}</span>
                                                    </td>
                                                )
                                            }
                                            {
                                                showEditAndDelete ? (
                                                    <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                                                        <Navlink href="/user/pokemon/edit">
                                                            <img className="mb-2" src={editImg} alt="edit"></img>

                                                        </Navlink>
                                                        <Navlink>
                                                            <img src={deleteImg} alt="delete"></img>

                                                        </Navlink>
                                                    </td>

                                                ) : (
                                                        <></>
                                                    )
                                            }
                                        </tr>
                                    </tbody>

                                )
                            })
                        }
                    </Table>
                </div>
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