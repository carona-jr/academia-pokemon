import React, { useState } from 'react'

import Personal from './Steps/Personal'
import Credentials from './Steps/Credentials'
import Address from './Steps/Address'
import Finish from './Steps/Finish'
import AlertMessage from '../alert'

import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/Container'

import { api } from '../../services/api'

function dataAtual() {
    let dNow = new Date()
    return `${dNow.getFullYear()}-${dNow.getMonth() + 1}-${dNow.getDate()} ${dNow.getHours()}:${dNow.getMinutes()}:${dNow.getSeconds()}`
}

export default function SignUp({ history }) {
    const [step, setStep] = useState([0, 0])
    const [user, setUser] = useState({})
    const [phone, setPhone] = useState({})
    const [verify, setVerify] = useState({})
    const [show, setShow] = useState(false)
    const [error, setError] = useState()

    async function handleSubmit(e) {
        let dataPhone
        e.preventDefault()
        const dataUser = {
            cpf: user.cpf,
            nome: user.nome,
            rg: user.rg,
            data_nascimento: user.data_nascimento || null,
            rua: user.rua || null,
            num_casa: user.num_casa || null,
            bairro: user.bairro || null,
            cidade: user.cidade || null,
            estado: user.estado || 'SP',
            cep: user.cep || null,
            e_mail: user.e_mail,
            password: user.password,
            data_cadastro: dataAtual()
        }

        if (phone.residencia) {
            dataPhone = {
                telefone: {
                    celular: phone.num_celular,
                    residencia: phone.num_telefone
                }
            }
        } else {
            dataPhone = {
                telefone: {
                    celular: phone.num_celular
                }
            }
        }
        try {
            const response = await api.post('/user', dataUser)
            localStorage.setItem('cpf', response.data.cpf)
            localStorage.setItem('user', JSON.stringify(response.data))
            await api.post('/user/phone', dataPhone, {
                headers: {
                    Authorization: 'Bearer ' + user.cpf
                }
            })

            const responsePhone = await api.get('/user/phone', {
                headers: {
                    Authorization: 'Bearer ' + user.cpf
                }
            })
            localStorage.setItem('phones', JSON.stringify(responsePhone.data))

            history.push('/user')
        } catch (e) {
            setError(e.response.data.error)
            setShow(true)
        }
    }

    function handleClickBack(e) {
        e.preventDefault()
        setStep([--step[0], Math.trunc(step[0] * 100 / 3)])
    }

    function handleClickNext(e) {
        e.preventDefault()
        setStep([++step[0], Math.trunc(step[0] * 100 / 3)])
    }

    return (
        <Container>
            <h2 className="text-center mb-5"> Cadastre-se </h2>
            <ProgressBar now={step[1]} label={`${step[1]}%`} className="mb-3" />
            <AlertMessage show={show} setShow={setShow}
                title="Ops, parece que houve um erro"
                msg={error}
                button="Tentar novamente"
                func={() => { setShow(false) }}
                colorAlert="danger"
                colorButton="outline-danger"
            />
            <Form onSubmit={handleSubmit}>
                {
                    (step[0] === 1) ? (
                        <Address
                            user={user}
                            setUser={setUser}
                            next={handleClickNext}
                            back={handleClickBack}
                        />
                    ) : (step[0] === 2) ? (
                        <Credentials
                            user={user}
                            setUser={setUser}
                            next={handleClickNext}
                            back={handleClickBack}
                            verify={verify}
                            setVerify={setVerify}
                        />
                    ) : (step[0] === 3) ? (
                        <Finish
                            user={user}
                            setUser={setUser}
                            phone={phone}
                            back={handleClickBack}
                        />
                    ) : (<Personal
                        user={user}
                        setUser={setUser}
                        phone={phone}
                        setPhone={setPhone}
                        next={handleClickNext}
                    />)
                }

            </Form>
        </Container>
    )
}
