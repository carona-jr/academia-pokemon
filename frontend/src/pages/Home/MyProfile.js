import React, { useState } from 'react'

import UserTemplate from '../../templates/UserTemplate'
import Button from 'react-bootstrap/Button'

import AlertMessage from '../../components/alert'

export default function MyProfile({ history }) {
    const [user] = useState(JSON.parse(localStorage.getItem('user')))
    const [show, setShow] = useState(false)

    return (
        <div>
            {
                !localStorage.getItem('cpf') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>
                            <h2 className="text-center mb-5">Meu perfil</h2>
                            <AlertMessage show={show} setShow={setShow}
                                title="Ops, parece que você quer deletar a sua conta?"
                                msg="Confirme no botão antes de deletar a sua conta ou aperte o X para voltar :("
                                button="Desejo apagar a minha conta"
                                func={() => {setShow(false)}}
                                colorAlert="warning"
                                colorButton="outline-danger"
                            />

                            <div className="w-100 d-flex flex-column justify-content-center align-content-center">
                                <div className="d-flex flex-row">
                                    <p style={{ width: '150px', fontWeight: 'bold' }}>Nome:</p>
                                    <p style={{ textTransform: 'capitalize' }}>{user.nome || 'user'}</p>
                                </div>
                                <div className="d-flex flex-row">
                                    <p style={{ width: '150px', fontWeight: 'bold' }}>CPF:</p>
                                    <p style={{ textTransform: 'capitalize' }}>{user.cpf || 'user'}</p>
                                </div>
                                <div className="d-flex flex-row">
                                    <p style={{ width: '150px', fontWeight: 'bold' }}>RG:</p>
                                    <p style={{ textTransform: 'capitalize' }}>{user.rg || 'user'}</p>
                                </div> <div className="d-flex flex-row">
                                    <p style={{ width: '150px', fontWeight: 'bold' }}>Nascimento:</p>
                                    <p style={{ textTransform: 'capitalize' }}>{user.data_nascimento.slice(0, 10) || 'user'}</p>
                                </div> <div className="d-flex flex-row">
                                    <p style={{ width: '150px', fontWeight: 'bold' }}>Rua:</p>
                                    <p style={{ textTransform: 'capitalize' }}>{user.rua || 'user'}</p>
                                </div> <div className="d-flex flex-row">
                                    <p style={{ width: '150px', fontWeight: 'bold' }}>Número:</p>
                                    <p style={{ textTransform: 'capitalize' }}>{user.num_casa || 'user'}</p>
                                </div>
                                <div className="d-flex flex-row">
                                    <p style={{ width: '150px', fontWeight: 'bold' }}>Bairro:</p>
                                    <p style={{ textTransform: 'capitalize' }}>{user.bairro || 'user'}</p>
                                </div>
                                <div className="d-flex flex-row">
                                    <p style={{ width: '150px', fontWeight: 'bold' }}>Cidade:</p>
                                    <p style={{ textTransform: 'capitalize' }}>{user.cidade || 'user'}</p>
                                </div>
                                <div className="d-flex flex-row">
                                    <p style={{ width: '150px', fontWeight: 'bold' }}>Estado:</p>
                                    <p style={{ textTransform: 'capitalize' }}>{user.estado || 'user'}</p>
                                </div>
                                <div className="d-flex flex-row">
                                    <p style={{ width: '150px', fontWeight: 'bold' }}>CEP:</p>
                                    <p style={{ textTransform: 'capitalize' }}>{user.cep || 'user'}</p>
                                </div>
                                <div className="d-flex flex-row">
                                    <p style={{ width: '150px', fontWeight: 'bold' }}>E-mail:</p>
                                    <p>{user.e_mail || 'user'}</p>
                                </div>
                                <div className="d-flex flex-row">
                                    <p style={{ width: '150px', fontWeight: 'bold' }}>Membro desde:</p>
                                    <p style={{ textTransform: 'capitalize' }}>{user.data_cadastro.slice(0, 10) || 'user'}</p>
                                </div>
                                <div className="d-flex justify-content-center mt-3 mb-5">
                                    <Button className="px-5 py-2  mr-3" variant="danger" type="button" onClick={() => setShow(true)}>Deletar</Button>
                                    <Button className="px-5 py-2 mr-3" variant="success" type="">Editar</Button>
                                </div>
                            </div>
                        </UserTemplate>
                    )
            }
        </div>
    )
}