import React from 'react'

import LoginNav from '../components/LoginHeader'
import SignUpForm from '../components/SignUp/SignUpForm'

import Container from 'react-bootstrap/Container'

export default function SignUp({ history }) {
    return (
        <Container className="d-flex justify-content-center pt-5 mt-5">
            <LoginNav />
            <Container className="mt-5">
                <SignUpForm history={history} />
            </Container>
        </Container>
    )
}       