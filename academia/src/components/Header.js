import React from 'react'
import Button from 'react-bootstrap/Button'

import './Header.css'

export default function Header() {
    return (
        <div className="container-header">
            <div>
                <h1 className="display-3">Academia Pokémon</h1>
            </div>
            <div>
                <Button className="px-md-3 mx-md-3" variant="light">Cadastrar</Button>
                <Button className="px-md-3 mx-md-3" variant="light">Entrar</Button>
            </div>
        </div>
    )
}