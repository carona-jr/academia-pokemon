import React from 'react'

import CreateList from '~/components/Lists/CreateList'

import UserTemplate from '~/templates/UserTemplate'

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
                                            displayName: 'Código do Departamento',
                                            name: 'codigo_dept',
                                            type: 'number',
                                            placeholder: '105'
                                        },
                                        {
                                            displayName: 'Nome',
                                            name: 'nome_dept',
                                            type: 'text',
                                            placeholder: 'Departamento do Nilceu'
                                        },
                                        {
                                            displayName: 'Classificação',
                                            name: 'classificacao',
                                            type: 'text',
                                            placeholder: 'Fogo'
                                        },
                                        {
                                            displayName: 'Gerente do departamento (CPF)',
                                            name: 'gerente',
                                            type: 'text',
                                            placeholder: '00100200300'
                                        },
                                    ]
                                }
                                route="/departamento"
                                registerDate={false}
                                history={history}
                                title="departamento"
                            />
                        </UserTemplate>
                    )
            }
        </div>
    )
}