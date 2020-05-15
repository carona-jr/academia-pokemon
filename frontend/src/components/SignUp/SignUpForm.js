import React, { useState } from 'react'

import Personal from './Steps/Personal'
import Credentials from './Steps/Credentials'
import Address from './Steps/Address'
import Finish from './Steps/Finish'

import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/Container'

import { api } from '../../services/api'

export default function SignUp({ history }) {
    const [step, setStep] = useState([0, 0])
    const [user, setUser] = useState({})
    const [phone, setPhone] = useState({})

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await api.post('/user', user)
            localStorage.setItem('cpf', response.data.cpf)
            history.push('/user')
            alert('foi')
        } catch (e) {
            alert(e)
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
