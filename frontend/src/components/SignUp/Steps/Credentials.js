import React from 'react'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

export default function Credentials({ user, setUser, next, back }) {
    return (
        <Container>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        onChange={e => setUser({ ...user, e_mail: e.target.value })}
                        type="email" placeholder="email@email.com" value={user.e_mail || ''}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        onChange={e => setUser({ ...user, password: e.target.value })}
                        type="password" placeholder="********" value={user.password || ''}/>
                </Form.Group>
            </Form.Row>
            <br/><br/><br/> <br/><br/><br/><br/>
            <Container className="text-center">
                <Button className="p-2 mr-3" variant="primary" type="button" alt="Anterior" onClick={back}>
                    &lt;&lt;&lt;
                </Button>

                <Button className="p-2 px-5 mr-3" variant="primary" type="submit" alt="Enviar" disabled>
                    Enviar
                </Button>

                <Button className="p-2 m-1" variant="primary" type="button" alt="Próximo" onClick={next}>
                    >>>
                </Button>
            </Container>
        </Container>
    )
}