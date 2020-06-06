import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import UserTemplate from '~/templates/UserTemplate'
import Button from 'react-bootstrap/Button'

import AlertMessage from '~/components/PopUp/Alert'

import { api } from '~/services/api'

export default function Admin({ history }) {
    const [query, setQuery] = useState('')
    const [result, setResult] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    let Key = 0

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await api.post('/admin', {
                query: query.query
            }, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('cpf')
                }
            })
            console.log(response.data[0][0])
            setResult(response.data)
            setShowSuccess(true)
        } catch (e) {
            setShowError(true)
        }
    }

    return (
        <div>
            {
                !localStorage.getItem('cpf') || !localStorage.getItem('mhaighstir') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>

                            <AlertMessage show={showSuccess} setShow={setShowSuccess}
                                title="Sucesso"
                                msg={'Consulta realizada com sucesso'}
                                button="Fechar"
                                func={() => {
                                    setShowSuccess(false)
                                }}
                                colorAlert="success"
                                colorButton="outline-success"
                            />

                            <AlertMessage show={showError} setShow={setShowError}
                                title="Erro"
                                msg={'Erro na consulta'}
                                button="Fechar"
                                func={() => setShowError(false)}
                                colorAlert="danger"
                                colorButton="outline-danger"
                            />

                            <div className="w-100 d-flex flex-column">
                                <h2 className="text-center mb-2">Suas consultas personalizadas</h2>
                                <p className="text-center mt-0 mb-5">Faça consultas diretamente no banco PostgreSQL</p>
                            </div>

                            <Form
                                className="w-100 d-flex justify-content-around align-items-center"
                                onSubmit={handleSubmit}
                            >
                                <Form.Group className="w-75 m-0" controlId="query">
                                    <Form.Control
                                        as="textarea" onChange={e => setQuery({ ...query, query: e.target.value })}
                                        type="text" placeholder="Insira sua consulta" value={query.query || ''} required />
                                </Form.Group>
                                <div className="m-0">
                                    <Button className="p-3" variant="dark" type="submit">
                                        Enviar
                                    </Button>
                                </div>
                            </Form>

                            {
                                result && result.length > 0 ? (
                                    <div className="w-80 my-5">
                                        {
                                            result.map(arr => {
                                                return (
                                                    <Table className="w-80 my-5" size="sm" responsive striped bordered hover key={Key++}>
                                                        <thead>
                                                            <tr>
                                                                {
                                                                    arr[0].map(name => {
                                                                        return (
                                                                            <th style={{ verticalAlign: 'middle', textAlign: 'center' }} key={Key++}>{name}</th>
                                                                        )
                                                                    })
                                                                }
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {
                                                                arr[1].map(row => {
                                                                    return (
                                                                        <tr key={Key++}>
                                                                            {
                                                                                arr[0].map(column => {
                                                                                    return (
                                                                                        <td style={{ verticalAlign: 'middle', textAlign: 'center', fontWeight: 'normal' }} key={Key++}>{row[column]}</td>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </tr>
                                                                    )
                                                                })
                                                            }

                                                        </tbody>

                                                    </Table>
                                                )

                                            })
                                        }

                                    </div>
                                ) : (result && result[0][0].length === 0) ? (
                                    <p className="text-center mt-5">Nenhuma tabela foi retornada</p>
                                ) : (
                                            <></>
                                        )
                            }

                        </UserTemplate>
                    )
            }
        </div>

    )

}