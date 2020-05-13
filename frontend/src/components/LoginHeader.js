import React from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import './Header.css'

export default function LoginHeader() {
    return (
        <Navbar className="p-0 pl-5" bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="/">
                <h2 className="logo display-5">Academia Pokémon</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/pricing">Preços</Nav.Link>
                    <Nav.Link href="/about">Sobre</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}