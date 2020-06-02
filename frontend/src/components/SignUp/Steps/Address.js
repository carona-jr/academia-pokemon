import React from 'react'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

export default function Address({ user, setUser, next, back }) {
    return (
        <Container>
            <Form.Row>
                <Form.Group as={Col} controlId="Rua">
                    <Form.Label>Rua</Form.Label>
                    <Form.Control
                        onChange={e => setUser({ ...user, rua: e.target.value })}
                        placeholder="Rua dos Andrades" value={user.rua || ''} />
                </Form.Group>
                <Form.Group as={Col} controlId="Numero">
                    <Form.Label>Número</Form.Label>
                    <Form.Control
                        md="4" onChange={e => setUser({ ...user, num_casa: e.target.value })}
                        placeholder="123" value={user.num_casa || ''} type="number" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="Bairro" >
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control
                        onChange={e => setUser({ ...user, bairro: e.target.value })}
                        placeholder="Bairro do Limoeiro" value={user.bairro || ''} />
                </Form.Group>
                <Form.Group as={Col} controlId="Cidade">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                        onChange={e => setUser({ ...user, cidade: e.target.value })}
                        placeholder="Cidade" value={user.cidade || ''} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                        onChange={e => setUser({ ...user, estado: e.target.value })}
                        as="select" value={user.estado || 'SP'}>
                        <option value="sp">SP</option>
                        <option value="rj">RJ</option>
                        <option value="mg">MG</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="CEP">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control
                        onChange={e => setUser({ ...user, cep: e.target.value })}
                        placeholder="12345678" value={user.cep || ''} type="number" />
                </Form.Group>
            </Form.Row>

            <Container className="text-center">
                <Button className="p-2 p-lg-3 mr-1 mr-lg-3 mt-5" variant="primary" type="button" alt="Anterior" onClick={back}>
                    &lt;&lt;&lt;
                </Button>

                <Button className="p-2 px-4 p-lg-3 px-lg-5 mr-1 mr-lg-3 mt-5" variant="primary" type="submit" alt="Enviar" disabled>
                    Enviar
                </Button>

                <Button className="p-2 p-lg-3 mt-5" variant="primary" type="button" alt="Próximo" onClick={next}>
                    >>>
                </Button>
            </Container>
        </Container>
    )
}