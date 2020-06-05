import React, { useState, useEffect } from 'react'

import { api } from '~/services/api'

import EditAttribute from '~/components/Lists/EditAttribute'
import UserTemplate from '~/templates/UserTemplate'

export default function ProfessionalProfile({ history }) {
    const [user] = useState(JSON.parse(localStorage.getItem('user')))
    const [master, setMaster] = useState({})

    async function loadProfile() {
        try {
            const profile = await api.get('/mestre', {
                headers: {
                    Authorization: 'Bearer ' + user.cpf
                }
            })
            setMaster({
                ...profile.data,
                data_cadastro: profile.data.data_cadastro.slice(0, 10)
            })
            localStorage.setItem('masterCPF', profile.data.cpf)
        } catch (e) {

        }

    }

    useEffect(() => {
        loadProfile()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {
                !localStorage.getItem('cpf') || localStorage.getItem('mhaighstir') !== 'true' ? (
                    history.push('/user')
                ) : (
                        <UserTemplate history={history}>
                            <div className="w-100 flex-column d-flex align-items-center mb-5">
                                <div className="mb-5">
                                    <h2>Meu perfil de Mestre</h2>
                                </div>
                                <div className="align-self-start mb-4" style={{ borderBottom: '1px solid #d9d9d9', width: '50%' }}>
                                    <h3>Dados pessoais</h3>
                                    <div className="ml-5 my-4">
                                        <div className="d-flex flex-row">
                                            <p style={{ width: '150px', fontWeight: 'bold' }}>CPF</p>
                                            <p style={{ textTransform: 'capitalize' }}>{master.cpf || 'Carregando...'}</p>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <p style={{ width: '150px', fontWeight: 'bold' }}>Promovido em</p>
                                            <p style={{ textTransform: 'capitalize' }}>{master.data_cadastro || 'Carregando...'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-100 mt-5">
                                <EditAttribute routeGet="/proficiencia" routeDelete="/proficiencia" attribute="proficiencia" cpf="masterCPF" />
                            </div>
                        </UserTemplate>
                    )
            }
        </div>
    )
}