import React from 'react'

import Header from '../components/Header'

export default function User({ history }) {
    return (
        <div>
            {
                !localStorage.getItem('cpf') ? (
                    history.push('/')
                ) : (
                        <div>
                            <Header />
                            <h1>User page</h1>
                        </div>
                    )
            }
        </div>
    )
}