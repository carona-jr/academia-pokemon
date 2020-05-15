import React, { useRef, useState } from 'react'

import Header from '../components/Header'
import SideNav from '../components/SideNav'

import './User.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { api } from '../services/api'

// function dataAtual() {
//     let dNow = new Date()
//     let localdate = dNow.getFullYear() + '-' + (dNow.getMonth() + 1) + '-' + dNow.getDate() + ' ' + dNow.getHours() + ':' + dNow.getMinutes()
//     return localdate
// }

export default function User({ history }) {
    const divMain = useRef()
    const [pokemon, setPokemon] = useState({})

    async function handleSubmit(e) {
        e.preventDefault()
        const dataPokemon = {
            nome: pokemon.nome || null,
            raca: pokemon.raca || null,
            classificacao: pokemon.classificacao || null,
            nivel: pokemon.nivel,
            nivel_objetivo: pokemon.nivel_objetivo,
            data_de_entrada: pokemon.data_de_entrada,
            data_de_saida: pokemon.data_de_saida
        }
        try {
            const response = await api.post('/pokemon', dataPokemon, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('cpf')
                }
            })
            history.push('/user/pokemon/new')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            {
                !localStorage.getItem('cpf') ? (
                    history.push('/')
                ) : (
                        <div>
                            <Header />
                            <div ref={divMain} className="container-user">
                                <h2 className="text-center m-0 p-0 my-5">Cadastre seu Pokémon</h2>
                                <Form className="w-75" onSubmit={handleSubmit}>
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
                                            <Form.Label>Classificação</Form.Label>
                                            <Form.Control
                                                onChange={e => setPokemon({ ...pokemon, classificacao: e.target.value })}
                                                type="text" placeholder="Água" value={pokemon.classificacao || ''} required />
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
                                                type="number" placeholder= "11" value={pokemon.nivel_objetivo || ''} required />
                                        </Form.Group>
                                    </Form.Row>
                                    <Container className="text-center py-3">
                                        <Button variant="primary" type="submit">
                                            Cadastrar
                                        </Button>
                                    </Container>
                                </Form>
                            </div>
                            <SideNav divMain={divMain} />
                        </div>
                    )
            }
        </div>
    )
}

// const queryInsertPokemon = {
//     text: 'INSERT INTO Pokemon (nome, classificacao, nivel, nivel_objetivo, data_de_entrada, data_de_saida, cpf) VALUES ($1, $2, $3, $4, $5, $6, $7)'
// }