import React, { useState, useEffect } from 'react'

import UserTemplate from '~/templates/UserTemplate'
import EditList from '~/components/Lists/EditList'

import { api } from '~/services/api'


export default function EditUpgrade({ history }){
    const [userName, setUserName] = useState('')
    
    async function loadUpgrade() {
        try {
            const response = await api.get('/user/me', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('upgrade').split(',')[1],
                    
                }
            })
            setUserName(response.data.nome)
        } catch (e) {
        }
    }

    useEffect(() => {
        loadUpgrade()
        // eslint-disable-next-line
    }, [])
        

    return (
        <div>
            {
                (!localStorage.getItem('cpf') || !localStorage.getItem('mhaighstir')) ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>
                            <div className="w-100 d-flex flex-column mb-5">
                                <h2 className="text-center">Editar dados dos aprimoramentos <span style={{ textTransform: 'capitalize' }}>{userName}</span></h2>
                            </div>
                            <EditList
                                history={history}
                                path="/master/upgrade/list"
                                name="Aprimora"
                                searchObj={{
                                    codigo_pokemon: localStorage.getItem('upgrade').split(',')[0],
                                    cpf: localStorage.getItem('upgrade').split(',')[1],
                                    hora_de_entrada: localStorage.getItem('upgrade').split(',')[2]
                                }}
                                routePatch="/aprimora"
                                routeGet="/aprimora"
                                allowedUpdates={['codigo_pokemon', 'cpf', 'hora_de_entrada', 'hora_de_saida']}
                                hasDate={true}
                                updates={[
                                    {
                                        name: 'codigo_pokemon',
                                        displayName: 'Codigo Pokémon',
                                        type: 'number',
                                        placeholder: '1'
                                    },
                                    {
                                        name: 'cpf',
                                        displayName: 'CPF', 
                                        type: 'text',
                                        placeholder: '225557575'
                                    },
                                    {
                                        name: 'hora_de_entrada',
                                        displayName: 'Hora de entrada',
                                        type: 'date',
                                        placeholder: '21/12/2020'
                                    },
                                    {
                                        name: 'hora_de_saida',
                                        displayName: 'Hora de saída',
                                        type: 'date',
                                        placeholder: '14/05/2020'
                                    }
                                ]}
                            />
                        </UserTemplate>
                    )
            }
        </div>
    )
}
 //    text: 'INSERT INTO Aprimora (codigo_pokemon, cpf, hora_de_entrada, hora_de_saida) VALUES ($1, $2, $3, $4)'
