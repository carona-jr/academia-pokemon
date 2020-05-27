import React, { useState, useEffect } from 'react'

import UserTemplate from '../../templates/UserTemplate'

import { api } from '../../services/api'

export default function Department({ history }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    async function loadProfile() {
        try{
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
            // const department = await api.get('/departamento', {
            //     headers: {
            //         Authorization: 'Bearer ' + user.cpf
            //     }
            // })
            setUser({
                ...user, 
                cpts: profile.data.cpts,
                instituto: profile.data.instituto,
                salario_base: profile.data.salario_base,
                especialidades: especialidade.data
            })
        } catch (e) {
            alert(e)
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
                                <div className="align-self-start mb-4" style={{ borderBottom: '1px solid #d9d9d9', width: '30%' }}>
                                    <h3>Seus dados pessoais</h3>
                                    <div className="ml-5 my-4">
                                        <div className="d-flex flex-row">
                                            <p style={{ width: '150px', fontWeight: 'bold'}}>CPTS:</p>
                                            <p style={{ textTransform: 'capitalize' }}>{user.cpts || 'carregando...'}</p>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <p style={{ width: '150px', fontWeight: 'bold' }}>Salário atual:</p>
                                            <p style={{ textTransform: 'capitalize' }}>R$ {user.salario_base || 'carregando...'}</p>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <p style={{ width: '150px', fontWeight: 'bold' }}>Instituto:</p>
                                            <p style={{ textTransform: 'capitalize' }}>{user.instituto || 'carregando...'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="align-self-start mb-4" style={{ borderBottom: '1px solid #d9d9d9', width: '30%' }}>
                                    <h3>Suas especialidades</h3>
                                    {
                                        !user.especialidades ? (
                                            <div className="ml-5 my-4">
                                                <div className="d-flex flex-row">
                                                    <p style={{ width: '150px', fontWeight: 'bold'}}>Especialidade:</p>
                                                    <p style={{ textTransform: 'capitalize' }}>{user.cpts || 'carregando...'}</p>
                                                </div>
                                            </div>
                                        ) : (
                                            user.especialidades.map(item => {
                                                return (
                                                    <div className="ml-5 my-4" key={item.especialidade}>
                                                        <div className="d-flex flex-row">
                                                            <p style={{ width: '150px', fontWeight: 'bold'}}>Especialidade:</p>
                                                            <p style={{ textTransform: 'capitalize' }}>{item.especialidade || 'carregando...'}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        )
                                    }
                                </div>
                                <div className="align-self-start mb-4" style={{ borderBottom: '1px solid #d9d9d9', width: '30%' }}>
                                    <h3>Seu departamento</h3>
                                    <div className="ml-5 my-4">
                                        <div className="d-flex flex-row">
                                            <p style={{ width: '150px', fontWeight: 'bold' }}>Departamento:</p>
                                            <p style={{ textTransform: 'capitalize' }}>{user.nome || 'carregando...'}</p>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <p style={{ width: '150px', fontWeight: 'bold' }}>Código:</p>
                                            <p style={{ textTransform: 'capitalize' }}>{user.codigo_dept || 'carregando...'}</p>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <p style={{ width: '150px', fontWeight: 'bold' }}>Gerente:</p>
                                            <p style={{ textTransform: 'capitalize' }}>{user.gerente || 'carregando...'}</p>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <p style={{ width: '150px', fontWeight: 'bold' }}>Classificação:</p>
                                            <p style={{ textTransform: 'capitalize' }}>{user.classificacao || 'carregando...'}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                    )
            }
        </UserTemplate>
    )
}
