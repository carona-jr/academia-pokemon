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
            console.log(response)
            localStorage.setItem('cpf', response.data.cpf)
            localStorage.setItem('nome', response.data.nome)
            localStorage.setItem('e_mail', response.data.e_mail)
            history.push('/user')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={e => setUser({ ...user, e_mail: e.target.value })} className="p-4" type="email" placeholder="seu@email.com" required/>
                <Form.Text className="text-muted">
                    Seu email não será compartilhado com ninguém.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control onChange={e => setUser({ ...user, password: e.target.value })} className="p-4" type="password" placeholder="********" required/>
            </Form.Group>
            <Button className="my-4" variant="primary" type="submit" size="lg" block>
                Entrar
            </Button>
        </Form>
    )
}