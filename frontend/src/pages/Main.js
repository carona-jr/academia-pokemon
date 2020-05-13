import React from 'react'

import Button from 'react-bootstrap/Button'
import LoginNav from '../components/LoginHeader'
import LoginForm from '../components/LoginForm'

import './Main.css'

export default function Main({ history }) {
    return (
        <div>
            {
                !localStorage.getItem('cpf') ? (
                    <div className="container-main d-flex justify-content-center align-items-center">
                        <LoginNav />
                        <div className="d-flex justify-content-center align-items-center">
                            <div className=" container-login p-5 rounded shadow">
                                <h2 className="display-5 text-center">Entrar</h2>
                                <div>
                                    <LoginForm history={history} />
                                    <p className="display-5 my-0">Se ainda não possui uma conta:</p>
                                    <Button className="my-1 text-center" variant="outline-light" type="submit" size="lg" block>
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