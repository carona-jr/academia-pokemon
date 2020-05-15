import React, { useRef } from 'react'
import Nav from 'react-bootstrap/Nav'

import homeImg from '../assets/icons/close-white-24dp.svg'
import homeImgBlack from '../assets/icons/close-black-24dp.svg'
import menu from '../assets/icons/menu_open-white-24dp.svg'
import menuBlack from '../assets/icons/menu_open-black-24dp.svg'

import './SideNav.css'

export default function User({ history }) {
    const nav = useRef()
    const menuIcon = useRef()
    const link1 = useRef()
    const link2 = useRef()
    const link3 = useRef()
    function handleClick() {
        nav.current.style.width = 0

        link1.current.style.position = 'relative'
        link1.current.style.left ='-50px'
        link2.current.style.position = 'relative'
        link2.current.style.left ='-50px'
        link3.current.style.position = 'relative'
        link3.current.style.left ='-50px'

        menuIcon.current.style.width = '52px'
    }

    function handleOpen() {
    
        if (window.innerWidth > 992)
            nav.current.style.width = '250px'
        else    
            nav.current.style.width = '50px'
        link1.current.style.position = 'static'
        link2.current.style.position = 'static'
        link3.current.style.position = 'static'

        menuIcon.current.style.width = 0
    }

    return (
        <div>
            <img ref={menuIcon} className="menu-nav" src={menuBlack} alt="x" onClick={handleOpen}/>
            <div ref={nav} className="container-sidebar">
                <Nav defaultActiveKey="/user" className="d-flex flex-column">
                    <Nav.Link ref={link1} className="nav-link-sidebar nav-home d-flex justify-content-center align-items-center" onClick={handleClick}>
                        <img className="icon-1" src={homeImg} alt="x" />
                        <img className="icon-2" src={homeImgBlack} alt="x" />
                        <p className="m-0">Fechar</p>
                    </Nav.Link>
                    <Nav.Link ref={link2}  className="nav-link-sidebar d-flex justify-content-center align-items-center" href="/home">
                        <img className="icon-1" src={menu} alt="x" />
                        <img className="icon-2" src={menuBlack} alt="x" />
                        <p className="m-0">sadasdasd</p>
                    </Nav.Link>
                    <Nav.Link ref={link3} className="nav-link-sidebar d-flex justify-content-center align-items-center" href="/home"><img className="icon-1" src={homeImg} alt="x" />
                        <img className="icon-2" src={homeImgBlack} alt="x" />
                        <p className="m-0">sadasdasd</p>
                    </Nav.Link>
                </Nav>
            </div>
        </div>
    )
}