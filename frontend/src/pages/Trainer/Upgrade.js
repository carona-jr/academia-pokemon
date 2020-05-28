import React, { useState, useEffect } from 'react'

import PokemonUpgradeList from '~/components/Upgrade/PokemonUpgradeList'

import { api } from '~/services/api'

import UserTemplate from '~/templates/UserTemplate'

export default function Upgrade({ history }) {
    const [count, setCount] = useState('??')

    async function loadCount() {
        const userCpf = localStorage.getItem('cpf')
        try {
            const responseCount = await api.get('/aprimora/treinador', {
                headers: {
                    Authorization: 'Bearer ' + userCpf
                }
            })
            setCount(responseCount.data.count)
        } catch (e) {
            setCount(0)
        }
    }

    useEffect(() => {
        loadCount()
    }, [])

    return (
        <div>
            {
                !localStorage.getItem('cpf') || !localStorage.getItem('coidse') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>

                            <div className="w-100 d-flex flex-column">
                                <h2 className="text-center mb-2">Você tem {count} trabalhos pendentes</h2>
                                <p className="text-center mt-0 mb-5">Aqui estão seus próximos 10 trabalhos:</p>
                                <PokemonUpgradeList />
                            </div>
                        </UserTemplate>
                    )
            }
        </div>
    )
}
