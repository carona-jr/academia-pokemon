import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-loading'
import imagemPokemon from '../../assets/images/ditto.png'
import { searchImg } from '../../services/img'
import { api } from '../../services/api'
import editImg from '../../assets/icons/edit-black-24dp.svg'
import deleteImg from '../../assets/icons/delete-black-24dp.svg'
import AlertMessage from '../../components/alert'

export default function PokemonList({ route, displayItem, displayText, showEditAndDelete }) {
    let pokemonList = []
    const [userPokemons, setUserPokemons] = useState()
    const [imgPokemon, setImgPokemon] = useState({})
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

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
            setUserPokemons(0)
        }
    }

    async function handleDelete(e, codigo) {
        e.preventDefault()
        try {
            const userCpf = localStorage.getItem('cpf')
            await api.delete('/pokemon',
                {
                    headers: {
                        Authorization: 'Bearer ' + userCpf,
                        PokemonID: codigo
                    }
                })
            setShow(true)
        } catch (e) {
            setShow2(true)
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
                    <AlertMessage show={show} setShow={setShow}
                        title="Sucesso"
                        msg="Seu pokémon foi deletado com sucesso, recarregue a página :)"
                        button="Recarregar"
                        func={() => {
                            setShow(false)
                            return window.location.reload(true)
                        }}
                        colorAlert="success"
                        colorButton="outline-success"
                    />
                    <AlertMessage show={show2} setShow={setShow2}
                        title="Erro"
                        msg="Seu pokémon não foi deletado com sucesso :)"
                        button="Fechar"
                        func={() => setShow(false)}
                        colorAlert="danger"
                        colorButton="outline-danger"
                    />
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
                                                        <a className="m-0 mr-3 p-0" href="/user/pokemon/edit" onClick={(e) =>
                                                            localStorage.setItem('pokemonID', pokemon.codigo_pokemon)
                                                        }>
                                                            <img src={editImg} alt="edit"></img>
                                                        </a>
                                                        <a className="m-0 p-0" href="/user/pokemon/mine" onClick={(e) => handleDelete(e, pokemon.codigo_pokemon)}>
                                                            <img src={deleteImg} alt="delete" ></img>
                                                        </a>
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
            ) : (userPokemons === 0) ? (
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