import React from 'react'

import UserTemplate from '~/templates/UserTemplate'

import CreateList from '~/components/Lists/CreateList'

export default function Upgrade({ history }) {
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
                                            displayName: 'CPF do Treinador',
                                            name: 'cpf',
                                            type: 'number',
                                            placeholder: '00100200300'
                                        },
                                        {
                                            displayName: 'CPTS',
                                            name: 'cpts',
                                            type: 'number',
                                            placeholder: '123456'
                                        },
                                        {
                                            displayName: 'Salário',
                                            name: 'salario_base',
                                            type: 'text',
                                            placeholder: '15.000'
                                        },
                                        {
                                            displayName: 'Instituto',
                                            name: 'instituto',
                                            type: 'text',
                                            placeholder: 'Unesp'
                                        },
                                    ]
                                }
                                route="/treinador"
                                registerDate={true}
                                history={history}
                                title="treinador"
                            />
                        </UserTemplate>
                    )
            }
        </div>
    )
}