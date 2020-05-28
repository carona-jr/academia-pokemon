import React from 'react'

import PokemonUpgradeList from '../../components/Upgrade/PokemonUpgradeList'

import UserTemplate from '../../templates/UserTemplate'

export default function Upgrade({ history }) {
    return (
        <div>
            {
                !localStorage.getItem('cpf') || !localStorage.getItem('coidse') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>

                            <div className="w-100 d-flex flex-column">
                                <h2 className="text-center mb-5">Seus próximos trabalhos</h2>
                                <PokemonUpgradeList/>
                            </div>
                        </UserTemplate>
                    )
            }
        </div>
    )
}
    