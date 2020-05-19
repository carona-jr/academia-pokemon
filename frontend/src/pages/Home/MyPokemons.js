import React, { useRef, useState, useEffect } from 'react'

import Spinner from 'react-loading'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { Pagination } from 'react-bootstrap'

import Header from '../../components/Nav/Header'
import SideNav from '../../components/Nav/SideNav'
import PokemonList from '../../components/Pokemon/PokemonList'

import { api } from '../../services/api'

export default function MyPokemons({ history }) {
    const divMain = useRef()
    const [user] = useState(JSON.parse(localStorage.getItem('user')))
    const [responseData, setResponseData] = useState()
    const [active, setActive] = useState(1)
    const [past, setPast] = useState(1)
    const [future, setFuture] = useState(active + 1)
    const [count, setCount] = useState()
    const [sort, setSort] = useState({ sortBy: ['nome', 'asc'], limit: 1 })

    async function loadPokemonCount() {
        const cpf = localStorage.getItem('cpf')
        try {
            const response = await api.get('/pokemon/all', {
                headers: {
                    Authorization: 'Bearer ' + cpf
                }
            })

            if (response.data.count === '0') {
                return setResponseData('empty')
            }

            const number = parseInt(response.data.count)

            if (number % 10 === 0)
                return setCount(Math.trunc(number / 10))

            setCount(Math.trunc(number / 10 + 1))
        } catch (e) {
            alert(e)
        }
    }

    let items = []
    for (let number = past; number <= future; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={(e) => handleClick(e, number)}>
                {number}
            </Pagination.Item>
        )
    }

    function handleClick(e, number) {
        setSort({ ...sort, limit: number })
        setActive(number) 
        if (number === 1) {
            setPast(1)
            setFuture(number + 1)
            return
        }

        if (number === count) {
            setPast(count - 1)
            setFuture(count)
            return
        }

        if (active < number) {
            setPast(future)
            setFuture(future + 1)
        } else {
            setPast(past - 1)
            setFuture(future - 1)
        }
    }

    function LoadPokemon() {
        return (
            <PokemonList route={`/pokemon/all?sortBy=${sort.sortBy[0]}:${sort.sortBy[1]}&limit=${sort.limit}`} />
        )
    }

    useEffect(() => {
        loadPokemonCount()
        LoadPokemon()
        // eslint-disable-next-line
    }, [sort])
    return (
        !localStorage.getItem('cpf') ? (
            history.push('/')
        ) : (
                <div>
                    <Header />
                    <div ref={divMain} className="container-user">
                        <h2 className="text-center m-0 p-0 my-5">Seu banco de Pokémons, <span style={{ textTransform: 'capitalize' }}>{user.data.nome || 'user'}</span>!</h2>
                        {
                            (count) ? (
                                <Container className="w-100 d-flex justify-content-center align-content-center">
                                    <Container>
                                        <Form className="d-flex flex-column flex-lg-row">
                                            <Form.Group controlId="formGridState" className="d-flex flex-row">
                                                <Form.Label className="w-100 w-lg-75 align-self-center">Ordenar por:</Form.Label>
                                                <Form.Control as="select" value={sort.sortSearch} onChange={e => setSort({ ...sort, sortBy: [e.target.value, sort.sortBy[1]] })}>
                                                    <option value="nome">Nome</option>
                                                    <option value="raca">Raça</option>
                                                    <option value="classificacao">Classificação</option>
                                                    <option value="nivel">Nível</option>
                                                    <option value="data_cadastro">Data de cadastro</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group className="d-flex flex-row justify-content-center align-content-center">
                                                <Form.Label as="legend" column>
                                                    De forma:
                                                    </Form.Label>
                                                <Form.Check
                                                    className="align-self-center mr-2"
                                                    type="radio"
                                                    label="Crescente"
                                                    name="formOrganizacao"
                                                    id="formOrganizacao1"
                                                    onChange={e => setSort({ ...sort, sortBy: [sort.sortBy[0], 'asc'] })}
                                                />
                                                <Form.Check
                                                    className="align-self-center"
                                                    type="radio"
                                                    label="Decrescente"
                                                    name="formOrganizacao"
                                                    id="formHorizontalRadios2"
                                                    onChange={e => setSort({ ...sort, sortBy: [sort.sortBy[0], 'desc'] })}
                                                />
                                            </Form.Group>
                                        </Form>
                                        <LoadPokemon />
                                        <Pagination className="justify-content-center mt-3">
                                            <Pagination.First onClick={(e) => handleClick(e, 1)} />
                                            <Pagination.Prev
                                                onClick={(e) => {
                                                    if (active === 1)
                                                        return handleClick(e, 1)
                                                    let number = active
                                                    return handleClick(e, --number)
                                                }}
                                            />
                                            {
                                                (active !== 1) ? (
                                                    <Pagination.Ellipsis />
                                                ) : (
                                                    <></>
                                                )
                                            }
                                            {items}
                                            {
                                                (active !== 3) ? (
                                                    <Pagination.Ellipsis />
                                                ) : (
                                                    <></>
                                                )
                                            }
                                            <Pagination.Next
                                                onClick={(e) => {
                                                    if (active === count)
                                                        return handleClick(e, active)
                                                    let number = active
                                                    return handleClick(e, ++number)
                                                }}
                                            />
                                            <Pagination.Last onClick={(e) => handleClick(e, count)} />
                                        </Pagination>
                                    </Container>
                                </Container>
                            ) : (responseData === 'empty') ? (
                                <div>
                                    <p>Você não possui nenhum pokémon :(</p>
                                </div>
                            ) : (
                                        <div className="d-flex justify-content-center my-5 py-5" >
                                            <Spinner type="bars" width={'32px'} height={'32px'} color={'green'} />
                                        </div>
                                    )
                        }

                    </div>
                    <SideNav divMain={divMain} />

                </div>
            )
    )
}