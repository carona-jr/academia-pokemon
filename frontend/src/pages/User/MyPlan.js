import React from 'react'

import CurrentPlan from '~/components/Plans/CurrentPlan'

import UserTemplate from '~/templates/UserTemplate'

export default function MyPlan({ history }) {
    return (
        <div>
            {
                !localStorage.getItem('cpf') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>
                            <div className="d-flex align-items-center flex-column mb-5">
                                <h2 className="mb-5">Meu plano</h2>
                                <CurrentPlan />
                            </div>
                        </UserTemplate>
                    )
            }
        </div>
    )
}