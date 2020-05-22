import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { api } from '../services/api'

export default function LoginHeader({ history }) {
    const [user, setUser] = useState({})
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await api.post('/user/login', user)
            localStorage.setItem('cpf', response.data.cpf)
            localStorage.setItem('user', JSON.stringify(response))
            history.push('/user')
        } catch (e) {
            alert('Usuário não encontrado no sistema, por favor, tente novamente')
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="emailInput">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={e => setUser({ ...user, e_mail: e.target.value })} className="p-4" type="email" placeholder="seu@email.com" required/>
                <Form.Text className="text-muted">
                    Seu email não será compartilhado com ninguém.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="passwordInput">
                <Form.Label>Senha</Form.Label>
                <Form.Control onChange={e => setUser({ ...user, password: e.target.value })} className="p-4" type="password" placeholder="********" required/>
            </Form.Group>
            <Button className="my-4" variant="primary" type="submit" size="lg" block>
                Entrar
            </Button>
        </Form>
    )
}