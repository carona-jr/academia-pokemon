import React from 'react'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Finish({ user, phone, back }) {
    console.log(phone)
    return (
        <Container className="text-center">
            {
                (!user.nome && !user.cpf && !user.rg && !user.e_mail && !user.password) ? (
                    <div>
                        <h1>Verifique o nome, cpf, rg, e_mail ou senha</h1>
                        <br/><br/><br/> <br/><br/><br/><br/><br/>
                    </div>
                ) : (
                        <Container className="w-50 text-center">
                            <Row>
                                <Col>
                                    Nome
                                </Col>
                                <Col>
                                    {user.nome}
                                </Col>
                                <Col>
                                    Data de nascimento
                                </Col>
                                <Col>
                                    {user.nome}
                                </Col>
                            </Row >
                            <Row>
                                <Col>
                                    CPF
                                </Col>
                                <Col>
                                    {user.cpf}
                                </Col>
                                <Row>
                                    <Col>
                                        RG
                                    </Col>
                                    <Col>
                                        {user.rg}
                                    </Col>
                                </Row>
                            </Row>
                        </Container >
                    )
            }

            <Button className="p-2 mr-3" variant="primary" type="button" alt="Anterior" onClick={back}>
                &lt;&lt;&lt;
            </Button>

            <Button className="p-2 px-5 mr-3" variant="primary" type="submit" alt="Enviar">
                Enviar
            </Button>

            <Button className="p-2 m-1" variant="primary" type="button" alt="Próximo" disabled>
                >>>
            </Button>
        </Container >
    )
}