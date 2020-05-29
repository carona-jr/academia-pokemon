import React from 'react'

import UserTemplate from '~/templates/UserTemplate'
import CardManager from '~/components/Master/CardManager'

import locationBlack from '~/assets/icons/location_city-black-24dp.svg'
import workBlack from '~/assets/icons/work-black-24dp.svg'
import upgradeBlack from '~/assets/icons/fitness_center-black-24dp.svg'
import buildBlack from '~/assets/icons/build-black-24dp.svg'
import faceBlack from '~/assets/icons/face-black-24dp.svg'
import eyeBlack from '~/assets/icons/remove_red_eye-black-24dp.svg'
import editBlack from '~/assets/icons/edit-black-24dp.svg'

export default function Upgrade({ history }) {
    return (
        <div>
            {
                !localStorage.getItem('cpf') || !localStorage.getItem('mhaighstir') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>
                            <div className="w-100 d-flex flex-column">
                                <h2 className="text-center mb-2">Seu painel de mestre</h2>
                                <p className="text-center mt-0 mb-5">Aqui você pode gerenciar o seu time</p>
                            </div>
                            <div className="w-100 m-0 p-0">
                                <div className="d-flex flex-row flex-wrap justify-content-center">
                                    <CardManager
                                        history={history}
                                        title="Departamentos"
                                        img={locationBlack}
                                        description="Gerencie os departamentos"
                                        create="Novo departamento"
                                        look="Todos os departamentos"
                                        routeCreate="/department/add"
                                        routeLook="/department/list"
                                    />
                                    <CardManager
                                        history={history}
                                        title="Funcionários"
                                        img={faceBlack}
                                        description="Gerencie os funcionários ativos"
                                        create="Novo funcionário"
                                        look="Ver funcionários ativos"
                                        routeCreate=""
                                        routeLook=""
                                    />
                                    <CardManager
                                        history={history}
                                        title="Treinadores"
                                        img={workBlack}
                                        description="Gerencie os seus treinadores"
                                        create="Novo treinador"
                                        look="Todos os treinadores"
                                        routeCreate="/trainer/add"
                                        routeLook="/trainer/list"
                                    />
                                    <CardManager
                                        history={history}
                                        title="Aprimoramento"
                                        img={upgradeBlack}
                                        description="Gerencie os seus trabalhos"
                                        create="Novo serviço"
                                        look="Todos os serviços"
                                        routeCreate=""
                                        routeLook=""
                                    />
                                    <CardManager
                                        history={history}
                                        title="Mestre"
                                        img={buildBlack}
                                        description="Gerencie os seus mestres"
                                        create="Novo mestre"
                                        look="Todos os mestres"
                                        routeCreate=""
                                        routeLook=""
                                    />
                                    <CardManager
                                        history={history}
                                        title="Minhas informações"
                                        img={eyeBlack}
                                        description="Veja os seus dados"
                                        create="Treinador"
                                        look="Mestre"
                                        routeCreate="/trainer/profile"
                                        routeLook=""
                                    />
                                    <CardManager
                                        history={history}
                                        title="Admin"
                                        img={editBlack}
                                        description="Faça consultas personalizadas"
                                        create="PostgreSQL"
                                        look="PostgreSQL"
                                        routeCreate=""
                                        routeLook=""
                                    />
                                </div>
                            </div>
                        </UserTemplate>
                    )
            }
        </div>
    )
}
