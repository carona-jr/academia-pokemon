import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import { api } from '~/services/api'

import UserTemplate from '~/templates/UserTemplate'

import AlertMessage from '~/components/PopUp/Alert'

export default function Upgrade({ history }) {
    const [department, setDepartment] = useState({})
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        const userCpf = localStorage.getItem('cpf')
        try {
            await api.post('/departamento', department, {
                headers: {
                    Authorization: 'Bearer ' + userCpf
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
                !localStorage.getItem('cpf') || !localStorage.getItem('mhaighstir') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>
                            <div className="w-100 d-flex flex-column">
                                <h2 className="text-center mb-5">Adicione um novo departamento</h2>

                                <AlertMessage show={show} setShow={setShow}
                                    title="Sucesso"
                                    msg="Seu departamento foi criado com sucesso :)"
                                    button="Fechar"
                                    func={() => setShow(false)}
                                    colorAlert="success"
                                    colorButton="outline-success"
                                />
                                <AlertMessage show={show2} setShow={setShow2}
                                    title="Erro"
                                    msg="Seu departamento não foi criado com sucesso :("
                                    button="Fechar"
                                    func={() => setShow(false)}
                                    colorAlert="danger"
                                    colorButton="outline-danger"
                                />

                                <Form className="w-100 w-lg-50" onSubmit={handleSubmit}>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="cod">
                                            <Form.Label>Código do departamento</Form.Label>
                                            <Form.Control
                                                onChange={e => setDepartment({ ...department, codigo_dept: e.target.value })}
                                                type="number" placeholder="001" value={department.codigo_dept || ''} required />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="nome">
                                            <Form.Label>Nome do departamento</Form.Label>
                                            <Form.Control
                                                onChange={e => setDepartment({ ...department, nome_dept: e.target.value })}
                                                type="text" placeholder="Departamento de Recursos Humanos" value={department.nome_dept || ''} required />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="classificacao">
                                            <Form.Label>Classificação do departamento</Form.Label>
                                            <Form.Control
                                                onChange={e => setDepartment({ ...department, classificacao: e.target.value })}
                                                type="text" placeholder="Fogo" value={department.classificacao || ''} required />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="gerente">
                                            <Form.Label>Gerente do departamento (CPF)</Form.Label>
                                            <Form.Control
                                                onChange={e => setDepartment({ ...department, gerente: e.target.value })}
                                                type="text" placeholder="00100200300" value={department.gerente || ''} required />
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
