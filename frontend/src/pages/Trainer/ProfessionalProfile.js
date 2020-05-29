import React, { useState, useEffect } from 'react'

import { api } from '~/services/api'

import UserTemplate from '~/templates/UserTemplate'

export default function ProfessionalProfile({ history }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    async function loadProfile() {
        try {
            const profile = await api.get('/treinador/me', {
                headers: {
                    Authorization: 'Bearer ' + user.cpf
                }
            })
            const especialidade = await api.get('/especialidade', {
                headers: {
                    Authorization: 'Bearer ' + user.cpf
                }
            })
            const department = await api.get('/trabalha', {
                headers: {
                    Authorization: 'Bearer ' + user.cpf
                }
            })
            setUser({
                ...user,
                cpts: profile.data.cpts,
                instituto: profile.data.instituto,
                salario_base: profile.data.salario_base,
                especialidades: especialidade.data,
                trabalha: department.data
            })
        } catch (e) {
            try {
                const profile = await api.get('/treinador/me', {
                    headers: {
                        Authorization: 'Bearer ' + user.cpf
                    }
                })
                const especialidade = await api.get('/especialidade', {
                    headers: {
                        Authorization: 'Bearer ' + user.cpf
                    }
                })
                setUser({
                    ...user,
                    cpts: profile.data.cpts,
                    instituto: profile.data.instituto,
                    salario_base: profile.data.salario_base,
                    especialidades: especialidade.data,
                    trabalha: [{ nome_dept: '...', codigo_dept: '...', gerente: '...', classificacao: '...' }]
                })
            } catch (e) {
                try {
                    const profile = await api.get('/treinador/me', {
                        headers: {
                            Authorization: 'Bearer ' + user.cpf
                        }
                    })
                    setUser({
                        ...user,
                        cpts: profile.data.cpts,
                        instituto: profile.data.instituto,
                        salario_base: profile.data.salario_base,
                        especialidades: [{ especialidade: 'nenhuma ainda :(' }],
                        trabalha: [{ nome_dept: '...', codigo_dept: '...', gerente: '...', classificacao: '...' }]
                    })
                } catch (e) {
                    console.log(e)
                }
            }
        }

    }

    useEffect(() => {
        loadProfile()
        // eslint-disable-next-line
    }, [])

    return (
        <UserTemplate history={history}>
            {
                !localStorage.getItem('cpf') || localStorage.getItem('coidse') !== 'true' ? (
                    history.push('/user')
                ) : (
                        <div className="w-100 flex-column d-flex align-items-center mb-5">
                            <div className="mb-5">
                                <h2>Suas infromações profissionais</h2>
                            </div>
                            <div className="align-self-start mb-4" style={{ borderBottom: '1px solid #d9d9d9', width: '50%' }}>
                                <h3>Seus dados pessoais</h3>
                                <div className="ml-5 my-4">
                                    <div className="d-flex flex-row">
                                        <p style={{ width: '150px', fontWeight: 'bold' }}>CPTS:</p>
                                        <p style={{ textTransform: 'capitalize' }}>{user.cpts || 'Carregando...'}</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <p style={{ width: '150px', fontWeight: 'bold' }}>Salário atual:</p>
                                        <p style={{ textTransform: 'capitalize' }}>R$ {user.salario_base || 'Carregando...'}</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <p style={{ width: '150px', fontWeight: 'bold' }}>Instituto:</p>
                                        <p style={{ textTransform: 'capitalize' }}>{user.instituto || 'Carregando...'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="align-self-start mb-4" style={{ borderBottom: '1px solid #d9d9d9', width: '50%' }}>
                                <h3>Suas especialidades</h3>
                                {
                                    !user.especialidades ? (
                                        <div className="ml-5 my-4">
                                            <div className="d-flex flex-row">
                                                <p>Carregando...</p>
                                            </div>
                                        </div>
                                    ) : (
                                            <ul className="ml-5 my-4" style={{ listStyleType: 'circle' }}>
                                                {
                                                    user.especialidades.map(item => {
                                                        return (
                                                            <li className="my-2" key={item.especialidade} style={{ textTransform: 'capitalize' }}>
                                                                {item.especialidade || 'Carregando...'}
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        )
                                }
                            </div>
                            <div className="align-self-start mb-4" style={{ borderBottom: '1px solid #d9d9d9', width: '50%' }}>
                                <h3>Seu departamento</h3>
                                {
                                    !user.trabalha ? (
                                        <div className="ml-5 my-4">
                                            <div className="d-flex flex-row">
                                                <p>Carregando...</p>
                                            </div>
                                        </div>
                                    ) : (
                                            <div className="ml-5 my-4">
                                                {
                                                    user.trabalha.map(item => {
                                                        return (
                                                            <div key={item.codigo_dept}>
                                                                <div className="d-flex flex-row">
                                                                    <p style={{ width: '150px', fontWeight: 'bold' }}>Departamento:</p>
                                                                    <p style={{ textTransform: 'capitalize' }}>{item.nome_dept || 'Carregando...'}</p>
                                                                </div>
                                                                <div className="d-flex flex-row">
                                                                    <p style={{ width: '150px', fontWeight: 'bold' }}>Código:</p>
                                                                    <p style={{ textTransform: 'capitalize' }}>{item.codigo_dept || 'Carregando...'}</p>
                                                                </div>
                                                                <div className="d-flex flex-row">
                                                                    <p style={{ width: '150px', fontWeight: 'bold' }}>Gerente:</p>
                                                                    <p style={{ textTransform: 'capitalize' }}>{item.gerente || 'Carregando...'}</p>
                                                                </div>
                                                                <div className="d-flex flex-row">
                                                                    <p style={{ width: '150px', fontWeight: 'bold' }}>Classificação:</p>
                                                                    <p style={{ textTransform: 'capitalize' }}>{item.classificacao || 'Carregando...'}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                }
                            </div>
                        </div>

                    )
            }
        </UserTemplate>
    )
}
