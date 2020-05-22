import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import LoginNav from '../../components/Nav/LoginHeader'
import LoginForm from '../../components/LoginForm'
import AlertMessage from '../../components/alert'

import './Login.css'

export default function Main({ history }) {
    const [show, setShow] = useState(false)

    function handleClick() {
        history.push('./signup')
    }

    return (
        <div>
            {
                !localStorage.getItem('cpf') ? (
                    <div className="container-main d-flex justify-content-center align-items-center">
                        <LoginNav />
                        <div>
                            <div className="container-login p-5 rounded shadow">
                                <h2 className="display-5 text-center">Entrar</h2>
                                <AlertMessage show={show} setShow={setShow}
                                    title="Erro"
                                    msg="Usuário não encontrado no sistema :("
                                    button="Fechar"
                                    func={() => setShow(false)}
                                    colorAlert="danger"
                                    colorButton="outline-danger"
                                />
                                <div>
                                    <LoginForm history={history} setShow={setShow} />
                                    <p className="display-5 my-0">Se ainda não possui uma conta:</p>
                                    <Button className="my-1 text-center" variant="outline-light" type="submit" size="lg" block onClick={handleClick}>
                                        Cadastre-se
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                        history.push('/user')
                    )
            }
        </div>
    )
}