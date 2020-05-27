import React from 'react'

import Button from 'react-bootstrap/Button'

import './NotFound.css'

import charizard from '../../assets/images/charizard.gif'

export default function NotFound({ history }) {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#f1f1f1' }}>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="my-4 title-404" style={{ color: '#808080', textTransform: 'uppercase' }}>Page Not Found - 404</h2>
                <div className="my-4">
                    <img src={charizard} alt="charizard" />
                </div>
                <div className="my-4">
                    <Button className="py-2 px-5" variant="outline-danger" type="button" onClick={() => history.push('/user')}>Voltar para a página anterior</Button>
                </div>
            </div>
        </div>
    )
}
