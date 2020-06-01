import React, { useState, useEffect } from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import Spinner from 'react-loading'
import { api } from '~/services/api'
import AlertMessage from '~/components/PopUp/Alert'

export default function FormList({ history, updates, path, name, routePatch, routeGet, searchTerm, searchObj, allowedUpdates }) {
    const [edit, setEdit] = useState()
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        delete edit.cpf
        delete edit.data_cadastro
        try {
            await api.patch(routePatch, {
                searchTerm: searchTerm || searchObj,
                ...edit
            }, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('cpf')
                }
            })
            setShowSuccess(true)
        } catch (e) {
            setShowError(true)
        }
    }

    async function loadData() {
        try {
            const response = await api.get(routeGet, {
                headers: {
                    Authorization: 'Bearer ' + searchTerm
                }
            })
            setEdit(response.data)
        } catch (e) {
            alert(e.response.data)
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            {
                edit ? (
                    <Form className="w-100 w-lg-50" onSubmit={handleSubmit} >
                        <AlertMessage show={showSuccess} setShow={setShowSuccess}
                            title="Sucesso"
                            msg={`${name} foi alterado com sucesso! :)`}
                            button="Recarregar"
                            func={() => {
                                setShowSuccess(false)
                                return window.location.reload(true)
                            }}
                            colorAlert="success"
                            colorButton="outline-success"
                        />
                        <AlertMessage show={showError} setShow={setShowError}
                            title="Erro"
                            msg={`${name} não foi alterado com sucesso! :(`}
                            button="Fechar"
                            func={() => setShowError(false)}
                            colorAlert="danger"
                            colorButton="outline-danger"
                        />

                        {
                            updates.map(item => {
                                return (
                                    <Form.Row key={item.name}>
                                        <Form.Group as={Col} controlId={item.name}>
                                            <Form.Label>{item.displayName}</Form.Label>
                                            <Form.Control
                                                onChange={e => setEdit({ ...edit, [item.name]: e.target.value })}
                                                type={item.type} placeholder={item.placeholder} value={edit[item.name] || ''} required />
                                        </Form.Group>
                                    </Form.Row>
                                )
                            })
                        }
                        <Container className="text-center py-3">
                            <Button className="mr-3 px-5 py-2" variant="danger" type="button" onClick={() => history.push(path)}>
                                Voltar
                    </Button>
                            <Button className="mr-3 px-5 py-2" variant="success" type="submit">
                                Atualizar
                    </Button>
                        </Container>
                    </Form>
                ) : (
                        <div className="d-flex justify-content-center my-5 py-5" >
                            <Spinner type="bars" width={'32px'} height={'32px'} color={'green'} />
                        </div>
                    )
            }
        </>
    )
}