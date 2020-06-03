import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import AlertMessage from '~/components/PopUp/Alert'
import { api } from '~/services/api'

export default function CreateList({ history, newRow, route, registerDate, title }) {
    const [data, setData] = useState({})
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    const today = new Date()
    async function handleSubmit(e) {
        e.preventDefault()
        const userCpf = localStorage.getItem('cpf')

        if (registerDate) {
            data.data_cadastro = today
        }
        
        try {
            await api.post(route, data, {
                headers: {
                    Authorization: 'Bearer ' + userCpf
                }
            })

            setShowSuccess(true)
        } catch (e) {
            console.log(e.response.data)
            setShowError(true)
        }   
    }

    return (
        <div className="w-100 d-flex flex-column">
            <h2 className="text-center mb-5">Adicione um novo {title}</h2>

            <AlertMessage show={showSuccess} setShow={setShowSuccess}
                title="Sucesso"
                msg={`Seu ${title} foi criado com sucesso :)`}
                button="Fechar"
                func={() => {
                    setShowSuccess(false) 
                    history.push('/master')
                }}
                colorAlert="success"
                colorButton="outline-success"
            />
            <AlertMessage show={showError} setShow={setShowError}
                title="Erro"
                msg={`Seu ${title} não foi criado com sucesso :(`}
                button="Fechar"
                func={() => setShowError(false)}
                colorAlert="danger"
                colorButton="outline-danger"
            />

            <Form className="w-100 w-lg-50" onSubmit={handleSubmit}>
                {
                    newRow.map(item => {
                        return (
                            <Form.Row key={item.name}>
                                <Form.Group as={Col} controlId={item.name}>
                                    <Form.Label>{item.displayName}</Form.Label>
                                    <Form.Control
                                        onChange={e => setData({ ...data, [item.name]: e.target.value })}
                                        type={item.type} placeholder={item.placeholder} value={data[item.name] || ''} required />
                                </Form.Group>
                            </Form.Row>
                        )
                    })
                }
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
    )
}
