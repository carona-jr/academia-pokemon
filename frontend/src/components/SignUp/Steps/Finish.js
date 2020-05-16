import React from 'react'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default function Finish({ user, phone, back }) {
    return (
        <Container className="text-center">
            {
                (!user.nome || !user.cpf || !user.rg || !user.e_mail || !user.password || !phone.num_celular || phone.num_celular === phone.num_telefone) ? (
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
                            {
                                (!phone.num_celular) ? (
                                    <li style={{ color: 'red', listStyle: 'none' }}>seu celular</li>
                                ) : (
                                        <li style={{ color: 'green', listStyle: 'none' }}>seu celular</li>
                                    )
                            }
                            {
                                (phone.num_celular === phone.num_telefone) ? (
                                    <li style={{ color: 'red', listStyle: 'none' }}>telefones iguais</li>
                                ) : (
                                        <li style={{ listStyle: 'none' }}></li>
                                    )
                            }
                        </ul>
                        <br />
                    </div>
                ) : (
                        <Container className="w-75 text-center">
                            <h5 style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.26)' }}>Meus dados</h5>
                            <p className="p-1">O meu nome é <span className="font-weight-bold">{user.nome}</span>, nasci na data <span className="font-weight-bold">{user.data_nascimento}</span>.</p>
                            <p className="p-1">O meu cpf é <span className="font-weight-bold">{user.cpf}</span> e meu rg é <span className="font-weight-bold">{user.rg}</span>.</p>
                            <p className="p-1">Meu e-mail é <span className="font-weight-bold">{user.e_mail}</span>, meu número de telefone é <span className="font-weight-bold">{phone.num_celular}</span></p>
                            <p className="p-1">Tenho residência no endereço: <span className="font-weight-bold">{user.rua}, {user.num_casa}, {user.bairro}, {user.cidade}, {user.estado}, {user.cep}</span>.</p>
                            <br/><br/>
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