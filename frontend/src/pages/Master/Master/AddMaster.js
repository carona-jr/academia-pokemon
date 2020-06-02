import React from 'react'

import UserTemplate from '~/templates/UserTemplate'
import CreateList from '~/components/Lists/CreateList'

export default function AddMaster({ history }) {
    return (
        <div>
            {
                !localStorage.getItem('cpf') || !localStorage.getItem('mhaighstir') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>
                            <CreateList
                                history={history}
                                newRow={
                                    [
                                        {
                                            displayName: 'CPF do Mestre',
                                            name: 'cpf',
                                            type: 'number',
                                            placeholder: '00100200300'
                                        },
                                    ]
                                }
                                route="/mestre"
                                registerDate={true}
                                title="mestre"
                            />
                        </UserTemplate>
                    )
            }
        </div>
    )
}
