import React, { useState, useEffect } from 'react'

import Spinner from 'react-loading'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import AlertMessage from '~/components/PopUp/Alert'

import { api } from '~/services/api'

import UserTemplate from '~/templates/UserTemplate'

export default function EditProfile({ history }) {
    const [user, setUser] = useState()
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    async function loadUser() {
        try {
            const userCpf = localStorage.getItem('cpf')
            const response = await api.get('/user/me', {
                headers: {
                    Authorization: 'Bearer ' + userCpf
                }
            })
            setUser(response.data)
        } catch (e) {
            history.push('/user/pokemon/mine')
            alert(e.response.data)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const userCpf = localStorage.getItem('cpf')
            await api.patch('/user/me', {
                nome: user.nome.toLowerCase(),
                data_nascimento: user.data_nascimento,
                cpf: user.cpf,
                rg: user.rg,
                e_mail: user.e_mail.toLowerCase(),  
                password: user.password,
                rua: user.rua.toLowerCase(),
                num_casa: user.num_casa,
                bairro: user.bairro.toLowerCase(),
                cidade: user.cidade.toLowerCase(),
                estado: user.estado.toLowerCase(),
                cep: user.cep
            }, {
                headers: {
                    Authorization: 'Bearer ' + userCpf
                }
            })

            const response = await api.get('/user/me', {
                headers: {
                    Authorization: 'Bearer ' + user.cpf
                }
            })

            localStorage.setItem('cpf', user.cpf)
            localStorage.setItem('user', JSON.stringify(response.data))
            setShow(true)
        } catch (e) {
            setShow2(true)
        }
    }

    useEffect(() => {
        loadUser()
        // eslint-disable-next-line
    }, [])

    return (
        <UserTemplate history={history}>
            {
                !localStorage.getItem('cpf') ? (
                    history.push('/')
                ) : (user) ? (
                    <div>
                        <h2 className="text-center m-0 p-0 my-5"><span style={{ textTransform: 'capitalize' }}>{user.nome}</span></h2>
                        <AlertMessage show={show} setShow={setShow}
                            title="Sucesso"
                            msg="Sua conta foi alterada com sucesso :)"
                            button="Fechar"
                            func={() => setShow(false)}
                            colorAlert="success"
                            colorButton="outline-success"
                        />
                        <AlertMessage show={show2} setShow={setShow2}
                            title="Erro"
                            msg="Sua conta não foi alterada com sucesso :("
                            button="Fechar"
                            func={() => setShow(false)}
                            colorAlert="danger"
                            colorButton="outline-danger"
                        />
                        <Form className="w-100 w-lg-50" onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="nome" sm="10">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        onChange={e => setUser({ ...user, nome: e.target.value })}
                                        type="text"  value={user.nome || ''} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="data_nascimento" sm="2">
                                    <Form.Label>Data de Nascimento</Form.Label>
                                    <Form.Control
                                        onChange={e => setUser({ ...user, data_nascimento: e.target.value })}
                                        type="date" value={user.data_nascimento.slice(0,10)} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row> 
                                <Form.Group as={Col} controlId="cpf">
                                    <Form.Label>CPF</Form.Label>
                                    <Form.Control
                                        onChange={e => setUser({ ...user, cpf: e.target.value })}
                                        type="text" value={user.cpf || ''} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="rg">
                                    <Form.Label>RG</Form.Label>
                                    <Form.Control
                                        onChange={e => setUser({ ...user, rg: e.target.value })}
                                        type="text" value={user.rg || ''} />
                                </Form.Group>
                            </Form.Row>
                            
                            <Form.Row>
                                <Form.Group as={Col} controlId="e_mail">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control
                                        onChange={e => setUser({ ...user, e_mail: e.target.value })}
                                        type="text" value={user.e_mail || ''} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="password">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control
                                        onChange={e => setUser({ ...user, password: e.target.value })}
                                        type="password"  value={user.password || ''} />
                                </Form.Group>
                            </Form.Row>
                            

                            <Form.Row>
                                <Form.Group as={Col} controlId="rua" sm="6">
                                    <Form.Label>Rua</Form.Label>
                                    <Form.Control
                                        onChange={e => setUser({ ...user, rua: e.target.value })}
                                        type="text" value={user.rua || ''} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="num_casa" sm="2">
                                    <Form.Label>Número</Form.Label>
                                    <Form.Control
                                        onChange={e => setUser({ ...user, num_casa: e.target.value })}
                                        type="integer" value={user.num_casa || ''} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="bairro" sm="4">
                                    <Form.Label>Bairro</Form.Label>
                                    <Form.Control
                                        onChange={e => setUser({ ...user, bairro: e.target.value })}
                                        type="text" value={user.bairro || ''} />
                                </Form.Group>

                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="cidade">
                                    <Form.Label>Cidade</Form.Label>
                                    <Form.Control
                                        onChange={e => setUser({ ...user, cidade: e.target.value })}
                                        type="text" placeholder="0" value={user.cidade || ''} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="estado">
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Control as="select" value={user.estado.toUpperCase()}
                                        onChange={e => setUser({ ...user, estado: e.target.value })} required>
                                        <option value="SP">SP</option>
                                        <option value="MG">MG</option>
                                        <option value="RJ">RJ</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="cep">
                                    <Form.Label>CEP</Form.Label>
                                    <Form.Control type="text" value={user.cep || ''}
                                        onChange={e => setUser({ ...user, cep: e.target.value })}>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <Container className="text-center py-3">
                                <Button className="mr-3 px-5 py-2" variant="danger" type="button" onClick={() => history.push('/user/profile')}>
                                    Voltar
                                </Button>
                                <Button className="mr-3 px-5 py-2" variant="success" type="submit">
                                    Atualizar
                                </Button>
                            </Container>
                        </Form>
                    </div>
                ) : (
                            <div className="d-flex justify-content-center my-5 py-5" >
                                <Spinner type="bars" width={'32px'} height={'32px'} color={'green'} />
                            </div>
                        )
            }
        </UserTemplate>
    )
}