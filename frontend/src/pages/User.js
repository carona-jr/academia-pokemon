import React, { useRef, useState } from 'react'
import PokemonList from '../components/PokemonList'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import './User.css'

export default function User({ history }) {
    const divMain = useRef()
    const [user] = useState(JSON.parse(localStorage.getItem('user')))
    return (
        <div>
            {
                !localStorage.getItem('cpf') ? (
                    history.push('/')
                ) : (
                        <div>
                            <Header/>
                            <div ref={divMain} className="container-user">
                                <h2> Bem vindo, <span style={{ textTransform: 'capitalize' }}>{user.data.nome || 'user'}</span>!</h2>
                                <h5>Seus Pokémons recentes:</h5>
                                <PokemonList />
                            </div>
                            <SideNav divMain={divMain} />
                        </div>
                    )
            }
        </div>
    )
}