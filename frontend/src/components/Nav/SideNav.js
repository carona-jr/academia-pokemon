import React, { useRef } from 'react'

import Nav from 'react-bootstrap/Nav'

import './SideNav.css'

import hideImg from '../../assets/icons/first_page-white-24dp.svg'
import hideImgBlack from '../../assets/icons/first_page-black-24dp.svg'
import menuBlack from '../../assets/icons/menu-black-24dp.svg'
import add from '../../assets/icons/add-white-24dp.svg'
import addBlack from '../../assets/icons/add-black-24dp.svg'
import eye from '../../assets/icons/remove_red_eye-white-24dp.svg'
import eyeBlack from '../../assets/icons/remove_red_eye-black-24dp.svg'
import work from '../../assets/icons/work-white-24dp.svg'
import workBlack from '../../assets/icons/work-black-24dp.svg'
import upgrade from '../../assets/icons/fitness_center-white-24dp.svg'
import upgradeBlack from '../../assets/icons/fitness_center-black-24dp.svg'

export default function SideNav({ divMain }) {
    const nav = useRef()
    const menuIcon = useRef()
    const link1 = useRef()
    const link2 = useRef()
    const link3 = useRef()
    const link4 = useRef()
    const link5 = useRef()
    function handleClick() {
        if (window.innerWidth > 992) {
            divMain.current.style.marginLeft = '100px'
        }
        else {
            divMain.current.style.marginLeft = '50px'
            divMain.current.style.marginRight = '50px'
        }

        nav.current.style.width = 0

        link1.current.style.position = 'relative'
        link1.current.style.left = '-100px'
        link2.current.style.position = 'relative'
        link2.current.style.left = '-100px'
        link3.current.style.position = 'relative'
        link3.current.style.left = '-100px'
        link4.current.style.position = 'relative'
        link4.current.style.left = '-100px'
        link5.current.style.position = 'relative'
        link5.current.style.left = '-100px'

        menuIcon.current.style.width = '52px'
    }

    function handleOpen() {

        if (window.innerWidth > 992) {
            nav.current.style.width = '250px'
            divMain.current.style.marginLeft = '350px'
        }
        else {
            divMain.current.style.marginLeft = '100px'
            nav.current.style.width = '50px'
        }
        link1.current.style.position = 'static'
        link2.current.style.position = 'static'
        link3.current.style.position = 'static'
        link4.current.style.position = 'static'
        link5.current.style.position = 'static'

        menuIcon.current.style.width = 0
    }

    return (
        <div>
            <img ref={menuIcon} className="menu-nav" src={menuBlack} alt="x" onClick={handleOpen} />
            <div ref={nav} className="container-sidebar">
                <Nav defaultActiveKey="/user" className="d-flex flex-column">
                    <Nav.Link ref={link1} className="nav-link-sidebar nav-home d-flex justify-content-center align-items-center"
                        onClick={handleClick}>
                        <img className="icon-1" src={hideImg} alt="x" />
                        <img className="icon-2" src={hideImgBlack} alt="x" />
                        <p className="m-0">Ocultar barra</p>
                    </Nav.Link>
                    <Nav.Link ref={link2} className="nav-link-sidebar d-flex justify-content-center align-items-center" href="/user/pokemon/new">
                        <img className="icon-1" src={add} alt="x" />
                        <img className="icon-2" src={addBlack} alt="x" />
                        <p className="m-0">Novo Pokémon</p>
                    </Nav.Link>
                    <Nav.Link ref={link3} className="nav-link-sidebar d-flex justify-content-center align-items-center" href="/user/pokemon/mine">
                        <img className="icon-1" src={eye} alt="x" />
                        <img className="icon-2" src={eyeBlack} alt="x" />
                        <p className="m-0">Meus Pokémons</p>
                    </Nav.Link>
                    {
                        (localStorage.getItem('coidse') === 'true') ? (
                            <Nav.Link ref={link4} className="nav-link-sidebar d-flex justify-content-center align-items-center" href="/trainer/profile">
                                <img className="icon-1" src={work} alt="x" />
                                <img className="icon-2" src={workBlack} alt="x" />
                                <p className="m-0">Treinador</p>
                            </Nav.Link>
                        ) : (
                                <></>
                            )
                    }
                    {
                        (localStorage.getItem('coidse') === 'true') ? (
                            <Nav.Link ref={link5} className="nav-link-sidebar d-flex justify-content-center align-items-center" href="/trainer/upgrade">
                                <img className="icon-1" src={upgrade} alt="x" />
                                <img className="icon-2" src={upgradeBlack} alt="x" />
                                <p className="m-0">Aprimora</p>
                            </Nav.Link>
                        ) : (
                                <></>
                            )
                    }
                </Nav>
            </div>
        </div>
    )
}