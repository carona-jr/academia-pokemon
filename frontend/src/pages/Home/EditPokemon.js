import React, { useRef } from 'react'

import Header from '../../components/Nav/Header'
import SideNav from '../../components/Nav/SideNav'

import './User.css'

export default function User({ history }) {
    const divMain = useRef()
    // const [user] = useState(JSON.parse(localStorage.getItem('user')))

    return (
        <div>
            {
                !localStorage.getItem('cpf') ? (
                    history.push('/')
                ) : (
                        <div>
                            <Header />
                            <div ref={divMain} className="container-user">
                                
                            </div>
                            <SideNav divMain={divMain} />
                        </div>
                    )
            }
        </div>
    )
}