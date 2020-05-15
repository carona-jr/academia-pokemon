import React from 'react'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Finish({ user, back }) {
    return (
        <Container className="text-center">
            {
                (!user.nome || !user.cpf || !user.rg || !user.e_mail || !user.password) ? (
                    <div>
                        <h3>Parece que está faltando algo importante :(</h3>
                        <p>Verifique os itens:</p>
                        <ul> 
                            {
                                (!user.nome) ? (
                                    <li style={{ color: 'red', listStyle: 'none' }}>seu nome</li>
                                ) : (
                                    <li style={{ color: 'green', listStyle: 'none' }}>seu nome</li>
                                )
                            }    
                            {
                                (!user.cpf) ? (
                                    <li style={{ color: 'red', listStyle: 'none' }}>seu cpf</li>
                                ) : (
                                    <li style={{ color: 'green', listStyle: 'none' }}>seu cpf</li>
                                )
                            }   
                            {
                                (!user.rg) ? (
                                    <li style={{ color: 'red', listStyle: 'none' }}>seu rg</li>
                                ) : (
                                    <li style={{ color: 'green', listStyle: 'none' }}>seu rg</li>
                                )
                            }        
                            {
                                (!user.e_mail) ? (
                                    <li style={{ color: 'red', listStyle: 'none' }}>seu e-mail</li>
                                ) : (
                                    <li style={{ color: 'green', listStyle: 'none' }}>seu e-mail</li>
                                )
                            }
                            {
                                (!user.password) ? (
                                    <li style={{ color: 'red', listStyle: 'none' }}>sua senha</li>
                                ) : (
                                    <li style={{ color: 'green', listStyle: 'none' }}>sua senha</li>
                                )
                            }
                        </ul>
                        <br/>
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

            {
                (!user.nome || !user.cpf || !user.rg || !user.e_mail || !user.password) ? (
                    <Button className="p-2 px-5 mr-3" variant="primary" type="submit" alt="Enviar" disabled>
                        Enviar
                    </Button>
                ) : (
                    <Button className="p-2 px-5 mr-3" variant="primary" type="submit" alt="Enviar">
                        Enviar
                    </Button>
                )
            }

            <Button className="p-2 m-1" variant="primary" type="button" alt="Próximo" disabled>
                >>>
            </Button>
        </Container >
    )
}