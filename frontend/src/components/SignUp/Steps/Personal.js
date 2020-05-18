import React from 'react'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

export default function Personal({ user, setUser, phone, setPhone, next }) {
    return (
        <Container>
            <Form.Row>
                <Form.Group as={Col} controlId="name">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        onChange={e => setUser({ ...user, nome: e.target.value })}
                        type="text" placeholder="Jose Maria" value={user.nome || ''} required/>
                </Form.Group>

                <Form.Group as={Col} controlId="Bday">
                    <Form.Label>Data de nascimento</Form.Label>
                    <Form.Control
                        onChange={e => setUser({ ...user, data_nascimento: e.target.value })}
                        type="date" value={user.data_nascimento || ''}/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="CPF">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control
                        onChange={e => setUser({ ...user, cpf: e.target.value })}
                        type="text" placeholder="123456789" value={user.cpf || ''} required/>
                </Form.Group>

                <Form.Group as={Col} controlId="RG">
                    <Form.Label>RG</Form.Label>
                    <Form.Control
                        onChange={e => setUser({ ...user, rg: e.target.value })}
                        type="text" placeholder="123456" value={user.rg || ''} required/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="num_celular">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control
                        onChange={e => setPhone({ ...phone, num_celular: e.target.value })}
                        type="text" placeholder="123456789" value={phone.num_celular || ''} />
                </Form.Group>

                <Form.Group as={Col} controlId="Telefone">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                        onChange={e => setPhone({ ...phone, num_telefone: e.target.value })}
                        type="text" placeholder="123456789" value={phone.num_telefone || ''} />
                </Form.Group>
            </Form.Row>


            <Container className="text-center">
                <Button className="p-2 p-lg-3 mr-1 mr-lg-3 mt-5" variant="primary" type="button" alt="Anterior" disabled>
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
