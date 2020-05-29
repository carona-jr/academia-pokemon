import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import { api } from '~/services/api'

import UserTemplate from '~/templates/UserTemplate'

import AlertMessage from '~/components/PopUp/Alert'

export default function Upgrade({ history }) {
    const [trainer, setTrainer] = useState({})
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const today = new Date()

    async function handleSubmit(e) {
        e.preventDefault()
        const userCpf = localStorage.getItem('cpf')
        try {
            await api.post('/treinador', { ...trainer, data_cadastro: today }, {
                headers: {
                    Authorization: 'Bearer ' + userCpf
                }
            })

            setShow(true)
        } catch (e) {
            console.log(e.response.data)
            setShow2(true)
        }
    }

    return (
        <div>
            {
                !localStorage.getItem('cpf') || !localStorage.getItem('mhaighstir') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>
                            <div className="w-100 d-flex flex-column">
                                <h2 className="text-center mb-5">Adicione um novo treinador</h2>

                                <AlertMessage show={show} setShow={setShow}
                                    title="Sucesso"
                                    msg="Treinador foi criado com sucesso :)"
                                    button="Fechar"
                                    func={() => setShow(false)}
                                    colorAlert="success"
                                    colorButton="outline-success"
                                />
                                <AlertMessage show={show2} setShow={setShow2}
                                    title="Erro"
                                    msg="Treinador não foi criado com sucesso :("
                                    button="Fechar"
                                    func={() => setShow(false)}
                                    colorAlert="danger"
                                    colorButton="outline-danger"
                                />

                                <Form className="w-100 w-lg-50" onSubmit={handleSubmit}>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="cpf">
                                            <Form.Label>CPF do Treinador</Form.Label>
                                            <Form.Control
                                                onChange={e => setTrainer({ ...trainer, cpf: e.target.value })}
                                                type="number" placeholder="00100200300" value={trainer.cpf || ''} required />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="cpts">
                                            <Form.Label>CPTS</Form.Label>
                                            <Form.Control
                                                onChange={e => setTrainer({ ...trainer, cpts: e.target.value })}
                                                type="number" placeholder="123456" value={trainer.cpts || ''} required />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="salario">
                                            <Form.Label>Salário</Form.Label>
                                            <Form.Control
                                                onChange={e => setTrainer({ ...trainer, salario_base: e.target.value })}
                                                type="text" placeholder="15.000" value={trainer.salario_base || ''} required />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="instituto">
                                            <Form.Label>Instuição de ensino</Form.Label>
                                            <Form.Control
                                                onChange={e => setTrainer({ ...trainer, instituto: e.target.value })}
                                                type="text" placeholder="Universidade Pokémon" value={trainer.instituto || ''} required />
                                        </Form.Group>
                                    </Form.Row>

                                    <Container className="text-center py-3">
                                        <Button className="mr-3 px-5 py-2" variant="danger" type="button" onClick={() => history.push('/master')}>
                                            Voltar
                                        </Button>
                                        <Button className="mr-3 px-5 py-2" variant="success" type="submit">
                                            Criar
                                        </Button>
                                    </Container>
                                </Form>
                            </div>
                        </UserTemplate>
                    )
            }
        </div>
    )
}
