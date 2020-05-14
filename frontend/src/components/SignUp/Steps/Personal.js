import React from 'react'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

export default function Personal({ user, setUser, next }) {
    return (
        <Container>
            <Form.Row>
                <Form.Group as={Col} controlId="name">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        onChange={e => setUser({ ...user, nome: e.target.value })}
                        type="text" placeholder="Jose Maria" value={user.nome || ''} />
                </Form.Group>

                <Form.Group as={Col} controlId="Bday">
                    <Form.Label>Data de nascimento</Form.Label>
                    <Form.Control
                        onChange={e => setUser({ ...user, data_nascimento: e.target.value })}
                        type="date" placeholder="10/11/2012" value={user.data_nascimento || ''} />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="CPF">
                <Form.Label>CPF</Form.Label>
                <Form.Control
                    onChange={e => setUser({ ...user, cpf: e.target.value })}
                    placeholder="12345678900" value={user.cpf || ''} />
            </Form.Group>

            <Form.Group controlId="RG">
                <Form.Label>RG</Form.Label>
                <Form.Control
                    onChange={e => setUser({ ...user, rg: e.target.value })}
                    placeholder="12345678" value={user.rg || ''} />
            </Form.Group>
            <Container className="text-center">
                <Button className="p-2 mr-3" variant="primary" type="button" alt="Anterior" disabled>
                    &lt;&lt;&lt;
                </Button>
                
                <Button className="p-2 m-1" variant="primary" type="button" alt="Próximo" onClick={next}>
                    >>>
                </Button>
            </Container>
        </Container>
    )
}
