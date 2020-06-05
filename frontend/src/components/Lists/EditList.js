import React, { useState, useEffect } from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import Spinner from 'react-loading'
import { api } from '~/services/api'
import AlertMessage from '~/components/PopUp/Alert'

export default function EditList({ history, updates, path, name, routePatch, routeGet, searchTerm, searchObj, allowedUpdates, hasDate }) {
    const [edit, setEdit] = useState()
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        for (let [key] of Object.entries(edit)) {
            if (!allowedUpdates.includes(key))
                delete edit[key]
        }

        console.log({
            searchTerm: searchTerm || searchObj,
            ...edit
        })

        try {
            await api.patch(routePatch, {
                searchTerm: searchTerm || searchObj,
                ...edit
            }, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('cpf')
                }
            })
            history.push(path)
            setShowSuccess(true)
        } catch (e) {
            setShowError(true)
        }
    }

    async function loadData() {
        try {
            let response
            if (searchObj) {
                response = await api.get(routeGet, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('cpf'),
                        ...searchObj
                    }
                })
            } else {
                response = await api.get(routeGet, {
                    headers: {
                        Authorization: 'Bearer ' + searchTerm
                    }
                })
            }
            setEdit(response.data)
        } catch (e) {
        }
    }

    useEffect(() => {
        loadData()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {
                edit ? (
                    <Form className="w-100 w-lg-50" onSubmit={handleSubmit}>
                        <AlertMessage show={showSuccess} setShow={setShowSuccess}
                            title="Sucesso"
                            msg={`${name} foi alterado com sucesso! :)`}
                            button="Voltar"
                            func={() => {
                                setShowSuccess(false)
                                return history.push('/master/upgrade/list')
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
                                            {
                                                (hasDate && (item.name === 'hora_de_entrada' || item.name === 'hora_de_saida')) ? (
                                                    <Form.Control
                                                        onChange={e => setEdit({ ...edit, [item.name]: e.target.value })}
                                                        type={item.type} placeholder={item.placeholder} value={edit[item.name].slice(0, 10)} required
                                                    />
                                                ) : (
                                                        <Form.Control
                                                            onChange={e => setEdit({ ...edit, [item.name]: e.target.value })}
                                                            type={item.type} placeholder={item.placeholder} value={edit[item.name] || ''} required
                                                        />
                                                    )
                                            }
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