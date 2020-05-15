import React from 'react'

import Header from '../components/Header'
import SideNav from '../components/SideNav'

export default function User({ history }) {
    return (
        <div>
            {
                !localStorage.getItem('cpf') ? (
                    history.push('/')
                ) : (
                        <div>
                            <Header />
                            <SideNav />
                        </div>
                    )
            }
        </div>
    )
}