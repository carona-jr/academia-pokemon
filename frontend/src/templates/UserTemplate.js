import React, { useRef } from 'react'

import './UserTemplate.css'

import Header from '../components/Nav/Header'
import SideNav from '../components/Nav/SideNav'

export default function UserTemplate({ history, children }) {
    const divMain = useRef()
    return (
        <div>
            <Header history={history} />
            <div ref={divMain} className="container-user">
                {children}
            </div>
            <SideNav divMain={divMain} />
        </div>
    )
}