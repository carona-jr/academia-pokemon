import React, { useState, useEffect } from 'react'

import Spinner from 'react-loading'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import AlertMessage from '~/components/PopUp/Alert'

import { api } from '~/services/api'

import UserTemplate from '~/templates/UserTemplate'

export default function EditPokemon({ history }) {
    const [pokemonID] = useState(localStorage.getItem('pokemonID'))
    const [pokemon, setPokemon] = useState()
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    async function loadPokemon() {
        try {
            const userCpf = localStorage.getItem('cpf')
            const response = await api.get('/pokemon/byId', {
                headers: {
                    Authorization: 'Bearer ' + userCpf,
                    PokemonID: pokemonID
                }
            })
            setPokemon(response.data)
        } catch (e) {
            history.push('/user/pokemon/mine')
            alert(e.response.data)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const userCpf = localStorage.getItem('cpf')
            await api.patch('/pokemon', {
                searchTerm: pokemonID,
                nome: pokemon.nome.toLowerCase(),
                raca: pokemon.raca.toLowerCase(),
                classificacao: pokemon.classificacao.toLowerCase(),
                nivel: pokemon.nivel,
                nivel_objetivo: pokemon.nivel_objetivo,
                data_de_entrada: pokemon.data_de_entrada,
                data_de_saida: pokemon.data_de_saida
            }, {
                headers: {
                    Authorization: 'Bearer ' + userCpf
                }
            })
            setShow(true)
        } catch (e) {
            setShow2(true)
        }
    }

    useEffect(() => {
        loadPokemon()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {
                !localStorage.getItem('cpf') ? (
                    history.push('/')
                ) : (!localStorage.getItem('pokemonID')) ? (
                    history.push('/user/pokemon/mine')
                ) : (pokemon) ? (
                    <UserTemplate history={history}>
                        <h2 className="text-center m-0 p-0 my-5"><span style={{ textTransform: 'capitalize' }}>{pokemon.nome}</span></h2>
                        <AlertMessage show={show} setShow={setShow}
                            title="Sucesso"
                            msg="Seu pokémon foi alterado com sucesso :)"
                            button="Fechar"
                            func={() => setShow(false)}
                            colorAlert="success"
                            colorButton="outline-success"
                        />
                        <AlertMessage show={show2} setShow={setShow2}
                            title="Erro"
                            msg="Seu pokémon não foi alterado com sucesso :("
                            button="Fechar"
                            func={() => setShow(false)}
                            colorAlert="danger"
                            colorButton="outline-danger"
                        />
                        <Form className="w-100 w-lg-50" onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="name">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        onChange={e => setPokemon({ ...pokemon, nome: e.target.value })}
                                        type="text" placeholder="Meu Pokémon" value={pokemon.nome || ''} required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="raca">
                                    <Form.Label>Raça</Form.Label>
                                    <Form.Control
                                        onChange={e => setPokemon({ ...pokemon, raca: e.target.value })}
                                        type="text" placeholder="Psyduck" value={pokemon.raca || ''} required />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="dataEntrada">
                                    <Form.Label>Data de entrada</Form.Label>
                                    <Form.Control
                                        onChange={e => setPokemon({ ...pokemon, data_de_entrada: e.target.value })}
                                        type="date" value={pokemon.data_de_entrada.slice(0, 10)} required />
                                </Form.Group>
                                <Form.Group as={Col} controlId="dataSaida">
                                    <Form.Label>Data de Saída</Form.Label>
                                    <Form.Control
                                        onChange={e => setPokemon({ ...pokemon, data_de_saida: e.target.value })}
                                        type="date" value={pokemon.data_de_saida.slice(0, 10)} required />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="classificacao">
                                    <Form.Label>Tipo</Form.Label>
                                    <Form.Control as="select" value={pokemon.classificacao}
                                        onChange={e => setPokemon({ ...pokemon, classificacao: e.target.value })} required>
                                        <option value="água">Água</option>
                                        <option value="dragão">Dragão</option>
                                        <option value="elétrico">Elétrico</option>
                                        <option value="fantasma">Fantasma</option>
                                        <option value="fada">Fada</option>
                                        <option value="fogo">Fogo</option>
                                        <option value="gelo">Gelo</option>
                                        <option value="inseto">Inseto</option>
                                        <option value="lutador">Lutador</option>
                                        <option value="metálico">Metálico</option>
                                        <option value="normal">Normal</option>
                                        <option value="noturno">Noturno</option>
                                        <option value="pedra">Pedra</option>
                                        <option value="planta">Planta</option>
                                        <option value="psíquico">Psíquico</option>
                                        <option value="terra">Terra</option>
                                        <option value="venenoso">Venenoso</option>
                                        <option value="voador">Voador</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="nivel">
                                    <Form.Label>Nível</Form.Label>
                                    <Form.Control
                                        onChange={e => setPokemon({ ...pokemon, nivel: e.target.value })}
                                        type="number" placeholder="0" value={pokemon.nivel || ''} required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="nivelObjetivo">
                                    <Form.Label>Nível Objetivo</Form.Label>
                                    <Form.Control
                                        onChange={e => setPokemon({ ...pokemon, nivel_objetivo: e.target.value })}
                                        type="number" placeholder="11" value={pokemon.nivel_objetivo || ''} required />
                                </Form.Group>
                            </Form.Row>
                            <Container className="text-center py-3">
                                <Button className="mr-3 px-5 py-2" variant="danger" type="button" onClick={() => history.push('/user/pokemon/mine')}>
                                    Voltar
                                </Button>
                                <Button className="mr-3 px-5 py-2" variant="success" type="submit">
                                    Atualizar
                                </Button>
                            </Container>
                        </Form>
                    </UserTemplate>
                ) : (
                                <UserTemplate history={history}>
                                    <div className="d-flex justify-content-center my-5 py-5" >
                                        <Spinner type="bars" width={'32px'} height={'32px'} color={'green'} />
                                    </div>
                                </UserTemplate>
                            )
            }
        </div>
    )
}