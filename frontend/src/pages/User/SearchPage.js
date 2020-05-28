import React from 'react'

import UserTemplate from '~/templates/UserTemplate'

export default function SearchPage({ history }) {
    // const [user] = useState(JSON.parse(localStorage.getItem('user')))

    return (
        <div>
            {
                !localStorage.getItem('cpf') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>

                        </UserTemplate>
                    )
            }
        </div>
    )
}