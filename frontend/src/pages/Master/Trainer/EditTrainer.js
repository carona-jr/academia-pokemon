import React from 'react'

import UserTemplate from '~/templates/UserTemplate'

import EditList from '~/components/Lists/EditList'

export default function EditTrainer({ history }) {
    return (
        <>
            {
                (!localStorage.getItem('cpf') || !localStorage.getItem('mhaighstir')) ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>
                            <EditList
                                history={history}
                                path="/master/trainer/list"
                                name="Treinador"
                                searchTerm={localStorage.getItem('trainerCPF')}
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
                        </UserTemplate>
                    )
            }
        </>
    )
}