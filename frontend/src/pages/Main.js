import React from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import './Main.css'

export default function Main() {
    return (
        <div className="container-main d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center">
                <div className=" container-login p-5 rounded shadow">
                    <h2 className="display-5 text-center">Entrar</h2>
                    <div>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control className="p-4" type="text" placeholder="123456789" required pattern="[0-9]{11}"/>
                                <Form.Text className="text-muted">
                                    Seu CPF não será compartilhado com ninguém.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control className="p-4" type="password" placeholder="********" required/>
                            </Form.Group>
                            <Button className="my-4" variant="primary" type="submit" size="lg" block>
                                Entrar
                            </Button>
                        </Form>
                            <p className="display-5 my-0">Se ainda não possui uma conta:</p>
                            <Button className="my-1 text-center" variant="outline-light" type="submit" size="lg" block>
                                Cadastre-se 
                            </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}