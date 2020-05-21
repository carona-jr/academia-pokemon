import React, { useRef } from 'react'

import Header from '../components/Nav/Header'
import SideNav from '../components/Nav/SideNav'

import './UserTemplate.css'

export default function UserTemplate({ history, children }) {
    const divMain = useRef()

    return (
        <div>
            {
                !localStorage.getItem('cpf') ? (
                    history.push('/')
                ) : (
                        <div>
                            <Header />
                            <div ref={divMain} className="container-user">
                                {children}
                            </div>
                            <SideNav divMain={divMain} />
                        </div>
                    )
            }
        </div>
    )
}