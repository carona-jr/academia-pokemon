import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import AlertMessage from '~/components/PopUp/Alert'

import { api } from '~/services/api'

import UserTemplate from '~/templates/UserTemplate'

function dataAtual() {
    let dNow = new Date()
    return `${dNow.getFullYear()}-${dNow.getMonth() + 1}-${dNow.getDate()} ${dNow.getHours()}:${dNow.getMinutes()}:${dNow.getSeconds()}`
}

export default function NewPokemon({ history }) {
    const [pokemon, setPokemon] = useState({})
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        const dataPokemon = {
            nome: pokemon.nome || null,
            raca: pokemon.raca || null,
            classificacao: pokemon.classificacao || 'água',
            nivel: pokemon.nivel,
            nivel_objetivo: pokemon.nivel_objetivo,
            data_de_entrada: pokemon.data_de_entrada,
            data_de_saida: pokemon.data_de_saida,
            data_cadastro: dataAtual()
        }
        try {
            await api.post('/pokemon', dataPokemon, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('cpf')
                }
            })
            setShow(true)
        } catch (e) {
            setShow2(true)
        }
    }

    return (
        <div>
            {
                !localStorage.getItem('cpf') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>
                            <h2 className="text-center m-0 p-0 my-5">Cadastre seu Pokémon</h2>
                            <AlertMessage show={show} setShow={setShow}
                                title="Sucesso"
                                msg="Seu pokémon foi registrado com sucesso :)"
                                button="Fechar"
                                func={() => setShow(false)}
                                colorAlert="success"
                                colorButton="outline-success"
                            />
                            <AlertMessage show={show2} setShow={setShow2}
                                title="Erro"
                                msg="Seu pokémon não foi registrado com sucesso. Tente novamente :("
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
                                            type="date" placeholder="2020-05-16" value={pokemon.data_de_entrada || ''} required />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="dataSaida">
                                        <Form.Label>Data de Saída</Form.Label>
                                        <Form.Control
                                            onChange={e => setPokemon({ ...pokemon, data_de_saida: e.target.value })}
                                            type="date" placeholder="2020-05-16" value={pokemon.data_de_saida || ''} required />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="classificacao">
                                        <Form.Label>Tipo</Form.Label>
                                        <Form.Control as="select" value={pokemon.classificacao}
                                            onChange={e => setPokemon({ ...pokemon, classificacao: e.target.value })} required>
                                            <option>Água</option>
                                            <option>Dragão</option>
                                            <option>Elétrico</option>
                                            <option>Fantasma</option>
                                            <option>Fada</option>
                                            <option>Fogo</option>
                                            <option>Gelo</option>
                                            <option>Inseto</option>
                                            <option>Lutador</option>
                                            <option>Metálico</option>
                                            <option>Normal</option>
                                            <option>Noturno</option>
                                            <option>Pedra</option>
                                            <option>Planta</option>
                                            <option>Psíquico</option>
                                            <option>Terra</option>
                                            <option>Venenoso</option>
                                            <option>Voador</option>
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
                                    <Button variant="primary" type="submit">
                                        Cadastrar
                                    </Button>
                                </Container>
                            </Form>
                        </UserTemplate>
                    )
            }
        </div>
    )
}