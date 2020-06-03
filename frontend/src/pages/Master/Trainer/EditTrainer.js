import React, { useState, useEffect } from 'react'

import EditAttribute from '~/components/Lists/EditAttribute'
import UserTemplate from '~/templates/UserTemplate'

import EditList from '~/components/Lists/EditList'
import { api } from '~/services/api'

export default function EditTrainer({ history }) {
    const [userName, setUserName] = useState('')

    async function loadTrainer() {
        try {
            const response = await api.get('/user/me', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('trainerCPF')
                }
            })
            setUserName(response.data.nome)
        } catch (e) {
        }
    }

    useEffect(() => {
        loadTrainer()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {
                (!localStorage.getItem('cpf') || !localStorage.getItem('mhaighstir')) ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>
                            <div className="w-100 d-flex flex-column mb-5">
                                <h2 className="text-center">Editar dados do treinador <span style={{ textTransform: 'capitalize' }}>{userName}</span></h2>
                            </div>
                            <EditList
                                history={history}
                                path="/master/trainer/list"
                                name="Treinador"
                                searchTerm={localStorage.getItem('trainer')}
                                routePatch="/treinador"
                                routeGet="/treinador/me"
                                allowedUpdates={['cpts', 'salario_base', 'instituto']}
                                updates={[
                                    {
                                        name: 'cpts',
                                        displayName: 'CPTS',
                                        type: 'text',
                                        placeholder: '001002003'
                                    },
                                    {
                                        name: 'salario_base',
                                        displayName: 'Salário',
                                        type: 'text',
                                        placeholder: 'R$ 1,00'
                                    },
                                    {
                                        name: 'instituto',
                                        displayName: 'Instituto',
                                        type: 'text',
                                        placeholder: 'Unesp'
                                    }
                                ]}
                            />

                            <div className="w-100 mt-5">
                                <EditAttribute routeGet="/especialidade" routeDelete="/especialidade" attribute="especialidade" cpf="trainerCPF"/>
                            </div>
                        </UserTemplate>
                    )
            }
        </>
    )
}