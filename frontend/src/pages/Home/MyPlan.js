import React from 'react'

import CurrentPlan from '../../components/Plans/CurrentPlan'

import UserTemplate from '../../templates/UserTemplate'

export default function MyProfile({ history }) {
    return (
        <div>
            {
                !localStorage.getItem('cpf') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>
                            <div className="d-flex align-items-center flex-column">
                                <h2 className="mb-5">Meu plano</h2>
                                <CurrentPlan/>
                            </div>
                        </UserTemplate>
                    )
            }
        </div>
    )
}