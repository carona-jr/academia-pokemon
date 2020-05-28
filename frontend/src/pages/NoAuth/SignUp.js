import React from 'react'

import Container from 'react-bootstrap/Container'

import LoginNav from '../../components/Nav/LoginHeader'
import SignUpForm from '../../components/SignUp/SignUpForm'

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