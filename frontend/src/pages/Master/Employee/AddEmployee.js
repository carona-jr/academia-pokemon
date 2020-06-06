import React from 'react'

import UserTemplate from '~/templates/UserTemplate'

import CreateList from '~/components/Lists/CreateList'

export default function AddEmployee({ history }) {
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
                                            displayName: 'CPF do Treinador/Mestre',
                                            name: 'cpf',
                                            type: 'text',
                                            placeholder: '00100200300'
                                        },
                                        {
                                            displayName: 'Código do departamento',
                                            name: 'codigo_dept',
                                            type: 'number',
                                            placeholder: '4265'
                                        }
                                    ]
                                }

                                route="/trabalha"
                                registerDate={false}
                                history={history}
                                title="trabalho"
                            />
                        </UserTemplate>
                    )
            }
        </div>
    )
}