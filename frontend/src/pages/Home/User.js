import React, { useRef, useState } from 'react'

import PokemonList from '../../components/Pokemon/PokemonList'
import Header from '../../components/Nav/Header'
import SideNav from '../../components/Nav/SideNav'
import PokemonByTypeChart from '../../components/Pokemon/Charts/PokemonByType'
import PokemonCalendar from '../../components/Pokemon/Calendar/PokemonCalendar'

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
                            <Header />
                            <div ref={divMain} className="container-user">
                                <h2>Bem vindo, <span style={{ textTransform: 'capitalize' }}>{user.data.nome || 'user'}</span>!</h2>
                                <div className="container-data">
                                    <div className="container-data-pokemon">
                                        <h5>Seus pokémons recentes</h5>
                                        <PokemonList route="/pokemon/top" displayItem={['nome', 'raca', 'nivel']} displayText= {['Nome', 'Raça', 'Nível']} showEditAndDelete={false}/>
                                    </div>
                                    <div className="p-0 m-0 container-data-chart">
                                        <h5>Seus pokémons por classificação</h5>
                                        <PokemonByTypeChart />
                                    </div>
                                </div>
                                <div className="container-data-calendar">
                                    <h5>Veja o seu histórico de pokémons</h5>
                                    <PokemonCalendar />
                                </div>
                            </div>
                            <SideNav divMain={divMain} />
                        </div>
                    )
            }
        </div>
    )
}