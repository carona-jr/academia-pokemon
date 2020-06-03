import React, { useState, useEffect } from 'react'
import deleteImg from '~/assets/icons/delete-black-24dp.svg'
import Spinner from 'react-loading'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import CardImage from 'react-bootstrap/CardImg'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import editImg from '~/assets/icons/edit-black-24dp.svg'
import check from '~/assets/icons/check-black-24dp.svg'
import close from '~/assets/icons/close-black-24dp.svg'

import AlertMessage from '~/components/PopUp/Alert'

import { api } from '~/services/api'

import UserTemplate from '~/templates/UserTemplate'

export default function Upgrade({ history }) {
    const [departments, setDepartments] = useState([])
    const [manager, setManager] = useState({})
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)

    async function loadDeparment() {
        const userCpf = localStorage.getItem('cpf')
        try {
            const response = await api.get('departamento/all', {
                headers: {
                    Authorization: 'Bearer ' + userCpf
                }
            })
            response.data.map(pokemon => {
                pokemon.show = false
                return pokemon
            })
            setDepartments(response.data)
        } catch (e) {
            setShowError(true)
        }
    }

    async function handleDelete(e, codigo_dept) {
        e.preventDefault()

        try {
            await api.delete('/departamento', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('cpf'),
                    codigo_dept
                }
            })

            setShowSuccess(true)
        } catch (e) {
            setShowError(true)
        }
    }

    async function handlePatch(e, codigo_dept, nome_dept) {
        e.preventDefault()
        try {
            await api.patch('/departamento', {
                searchTerm: {
                    codigo_dept,
                    nome_dept
                },
                gerente: manager.gerente
            }, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('cpf'),
                    codigo_dept
                }
            })
            setShowSuccess(true)
        } catch (e) {
            setShowError(true)
        }
    }

    function handleOpen(e, cod) {
        e.preventDefault()
        setDepartments(departments.filter(item => {
            if (item.codigo_dept === cod)
                item.show = true
            return item
        }))
    }

    function handleClose(e, cod) {
        e.preventDefault()
        setDepartments(departments.filter(item => {
            if (item.codigo_dept === cod)
                item.show = false
            return item
        }))
    }

    useEffect(() => {
        loadDeparment()
    }, [showSuccess, showError])

    return (
        <div>
            {
                !localStorage.getItem('cpf') || !localStorage.getItem('mhaighstir') ? (
                    history.push('/')
                ) : departments.length > 0 ? (
                    <UserTemplate history={history}>
                        <div className="w-100 d-flex flex-column mb-5">
                            <h2 className="text-center">Departamentos</h2>
                        </div>
                        <AlertMessage show={showSuccess} setShow={setShowSuccess}
                            title="Sucesso"
                            msg={`Ação realizada com sucesso :)`}
                            button="Fechar"
                            func={() => { setShowSuccess(false) }}
                            colorAlert="success"
                            colorButton="outline-success"
                        />
                        <AlertMessage show={showError} setShow={setShowError}
                            title="Erro"
                            msg={`Ação não foi realizada com sucesso :(`}
                            button="Fechar"
                            func={() => setShowError(false)}
                            colorAlert="danger"
                            colorButton="outline-danger"
                        />
                        <div className="d-flex flex-row flex-wrap justify-content-center">
                            {
                                departments.map(department => {
                                    return (
                                        <Card key={department.codigo_dept} className="w-auto mr-5 mb-5">
                                            <Card.Body className="mb-3 mt-3">
                                                <div className="d-flex flex-row justify-content-between align-items-center mb-3">
                                                    <Card.Title className="m-0"><span style={{ textTransform: 'capitalize' }}>{department.nome_dept}</span></Card.Title>
                                                    <CardImage className="hover-cursor" src={deleteImg} style={{ width: '24px' }} alt="abrir" onClick={(e) => handleDelete(e, department.codigo_dept)} />
                                                </div>
                                                <Card.Text>
                                                    Código: {department.codigo_dept}
                                                </Card.Text>
                                                <ListGroup className="list-group-flush" variant="dark" text="light">
                                                    <ListGroupItem className="d-flex flex-column" variant="light" text="dark">
                                                        Classificação: <span style={{ textTransform: 'capitalize' }}>{department.classificacao}</span>
                                                    </ListGroupItem>
                                                    <ListGroupItem variant="light" text="dark">
                                                        <div className="d-flex flex-row justify-content-between">
                                                            <div className="d-flex align-content-center mr-3">
                                                                <span style={{ textTransform: 'capitalize' }}> Gerente: {department.nome}</span>
                                                            </div>
                                                            <div className="d-flex flex-row justify-content-center align-content-center">
                                                                <img className="hover-cursor mr-3" src={editImg} style={{ width: '24px' }} alt="editar" onClick={(e) => handleOpen(e, department.codigo_dept)} />
                                                                <div>
                                                                    {
                                                                        department.show ? (
                                                                            <div className="d-flex flex-row align-items-center">
                                                                                <div className="mr-3">
                                                                                    <Form>
                                                                                        <Form.Group className="m-0" controlId="gerente">
                                                                                            <Form.Control
                                                                                                onChange={e => setManager({ ...manager, gerente: e.target.value })}
                                                                                                type="text" placeholder="CPF do gerente" value={manager.gerente || ''} required />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </div>
                                                                                <div>
                                                                                    <img className="hover-cursor mr-3" src={check} style={{ width: '32px' }} alt="novo" onClick={(e) => handlePatch(e, department.codigo_dept, department.nome_dept)} />
                                                                                </div>
                                                                                <div>
                                                                                    <img className="hover-cursor mr-3" src={close} style={{ width: '32px' }} alt="fechar" onClick={(e) => handleClose(e, department.codigo_dept)} />
                                                                                </div>
                                                                            </div>
                                                                        ) : (
                                                                                <></>
                                                                            )
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                    </UserTemplate>

                ) : (departments.length === 0) ? (
                    <UserTemplate history={history}>
                        <h6>Não há departamentos registrados!</h6>
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
