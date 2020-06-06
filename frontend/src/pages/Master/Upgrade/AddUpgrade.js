import React from 'react'

import UserTemplate from '~/templates/UserTemplate'

import CreateList from '~/components/Lists/CreateList'

export default function AddUpgrade({ history }) {
    return (
        <div>
            {
                !localStorage.getItem('cpf') || !localStorage.getItem('mhaighstir') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>
                            <CreateList
                                newRow={
                                    [
                                        {
                                            displayName: 'Código do Pokémon',
                                            name: 'codigo_pokemon',
                                            type: 'number',
                                            placeholder: '1'
                                        },
                                        {
                                            displayName: 'CPF do Treinador',
                                            name: 'cpf',
                                            type: 'text',
                                            placeholder: '00100200300'
                                        },
                                        {
                                            displayName: 'Hora de entrada',
                                            name: 'hora_de_entrada',
                                            type: 'datetime-local',
                                            placeholder: '23/10/2020 19:00'
                                        },
                                        {
                                            displayName: 'Hora de saida',
                                            name: 'hora_de_saida',
                                            type: 'datetime-local',
                                            placeholder: '23/10/2020 19:00'
                                        }
                                    ]
                                }
                                route="/aprimora"
                                registerDate={false}
                                history={history}
                                title="aprimoramento"
                            />
                        </UserTemplate>
                    )
            }
        </div>
    )
}
 //    text: 'INSERT INTO Aprimora (codigo_pokemon, cpf, hora_de_entrada, hora_de_saida) VALUES ($1, $2, $3, $4)'
