import React from 'react'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

export default function Credentials({ user, setUser, next, back, verify, setVerify }) {
    return (
        <Container>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        onChange={e => setUser({ ...user, e_mail: e.target.value })}
                        type="email" placeholder="email@email.com" value={user.e_mail || ''} required />
                </Form.Group>

                <Form.Group as={Col} controlId="formEmail">
                    <Form.Label>Confirme seu e-mail</Form.Label>
                    <Form.Control
                        onChange={e => setVerify({ ...verify, e_mail: e.target.value })}
                        type="email" placeholder="email@email.com" value={verify.e_mail || ''} required />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        onChange={e => setUser({ ...user, password: e.target.value })}
                        type="password" placeholder="********" value={user.password || ''} required />
                </Form.Group>

                <Form.Group as={Col} controlId="formPassword">
                    <Form.Label>Confirme sua senha</Form.Label>
                    <Form.Control
                        onChange={e => setVerify({ ...verify, password: e.target.value })}
                        type="password" placeholder="********" value={verify.password || ''} required />
                </Form.Group>
            </Form.Row>
            <br /><br /><br /><br />
            <Container className="text-center">
                <Button className="p-2 mr-3" variant="primary" type="button" alt="Anterior" onClick={back}>
                    &lt;&lt;&lt;
                </Button>

                <Button className="p-2 px-5 mr-3" variant="primary" type="submit" alt="Enviar" disabled>
                    Enviar
                </Button>

                {
                    (user.e_mail === verify.e_mail && user.password === verify.password && user.e_mail && user.password) ? (
                        <Button className="p-2 m-1" variant="primary" type="button" alt="Próximo" onClick={next}>
                            >>>
                        </Button>
                    ) : (
                            <Button className="p-2 m-1" variant="primary" type="button" alt="Próximo" onClick={next} disabled>
                                >>>
                            </Button>
                        )
                }
            </Container>
        </Container>
    )
}