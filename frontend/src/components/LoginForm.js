import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { api } from '../services/api'

export default function LoginHeader({ history }) {
    const [user, setUser] = useState({})

    async function handleSubmit(e) {
        e.preventDefault()
        const data = { ...user }
        console.log(data)
        try {
            const response = await api.post('/user/login', user)
            console.log(response)
            localStorage.setItem('cpf', response.data.cpf)
            history.push('/user')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>CPF</Form.Label>
                <Form.Control onChange={e => setUser({ ...user, cpf: e.target.value })} className="p-4" type="text" placeholder="123456789" required pattern="[0-9]{11}" />
                <Form.Text className="text-muted">
                    Seu CPF não será compartilhado com ninguém.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control onChange={e => setUser({ ...user, password: e.target.value })} className="p-4" type="password" placeholder="********" required />
            </Form.Group>
            <Button className="my-4" variant="primary" type="submit" size="lg" block>
                Entrar
            </Button>
        </Form>
    )
}