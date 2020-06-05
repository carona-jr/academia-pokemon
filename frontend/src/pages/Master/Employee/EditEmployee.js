import React, { useState, useEffect } from 'react'

import UserTemplate from '~/templates/UserTemplate'

import { api } from '~/services/api'

import EditList from '~/components/Lists/EditList'

export default function EditEmployee({ history }) {
    const [userName, setUserName] = useState()

    async function loadData() {
        try {
            const response = await api.get('/user/me', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('employee').split(',')[1],
                }
            })
            setUserName(response.data.nome)
        } catch (e) {
        }
    }

    useEffect(() => {
        loadData()
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
                                <h2 className="text-center">Editar dados dos funcionários <span style={{ textTransform: 'capitalize' }}>{userName}</span></h2>
                            </div>
                            <EditList
                                history={history}
                                path="/master/employee/list"
                                name="trabalha"
                                searchObj={{
                                    codigo_dept: localStorage.getItem('employee').split(',')[0],
                                    cpf: localStorage.getItem('employee').split(',')[1]
                                }}
                                routePatch="/trabalha"
                                routeGet="/trabalha"
                                allowedUpdates={['codigo_dept']}
                                hasDate={false}
                                updates={[
                                    {
                                        name: 'codigo_dept',
                                        displayName: 'Codigo Departamento',
                                        type: 'number',
                                        placeholder: '654'
                                    }
                                ]}
                            />
                        </UserTemplate>
                    )
            }
        </div>
    )
}
