import React from 'react'
import Nav from 'react-bootstrap/Nav'

import homeImg from '../assets/icons/close-white-24dp.svg'
import homeImgBlack from '../assets/icons/close-black-24dp.svg'
import trash from '../assets/icons/menu_open-white-24dp.svg'
import trashBlack from '../assets/icons/menu_open-black-24dp.svg'

import './SideNav.css'

export default function User({ history }) {
    return (
        <div className="container-sidebar">
            <Nav defaultActiveKey="/home" className="d-flex flex-column">
                <Nav.Link className="nav-link-sidebar nav-home d-flex justify-content-center align-items-center" href="/home">
                    <img className="icon-1" src={homeImg} alt="x" />
                    <img className="icon-2" src={homeImgBlack} alt="x" />
                    <p className="m-0">sadasdasd</p>
                </Nav.Link>
                <Nav.Link className="nav-link-sidebar d-flex justify-content-center align-items-center" href="/home">
                    <img className="icon-1" src={trash} alt="x" />
                    <img className="icon-2" src={trashBlack} alt="x" />
                    <p className="m-0">sadasdasd</p>
                </Nav.Link>
                <Nav.Link className="nav-link-sidebar d-flex justify-content-center align-items-center" href="/home"><img className="icon-1" src={homeImg} alt="x" />
                    <img className="icon-2" src={homeImgBlack} alt="x" />
                    <p className="m-0">sadasdasd</p>
                </Nav.Link>
            </Nav>
        </div>
    )
}