import React, { useRef } from 'react'
import PokemonList from '../components/PokemonList'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import './User.css'

export default function User({ history }) {
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
                                <h2> Bem vindo, <span style={{ textTransform: 'capitalize' }}>{localStorage.getItem('nome')}</span>!</h2>
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