import React from 'react'

import UserTemplate from '~/templates/UserTemplate'
import CardManager from '~/components/Master/CardManager'
import locationBlack from '~/assets/icons/location_city-black-24dp.svg'
import workBlack from '~/assets/icons/work-black-24dp.svg'
import upgradeBlack from '~/assets/icons/fitness_center-black-24dp.svg'
import buildBlack from '~/assets/icons/build-black-24dp.svg'
import faceBlack from '~/assets/icons/people_alt-black-24dp.svg'
import eyeBlack from '~/assets/icons/remove_red_eye-black-24dp.svg'

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
                                        routeCreate="/master/department/add"
                                        routeLook="/master/department/list"
                                    />
                                    <CardManager
                                        history={history}
                                        title="RH"
                                        img={faceBlack}
                                        description="Gerencie as relações de trabalho"
                                        create="Novo funcionário"
                                        look="Ver funcionários ativos"
                                        routeCreate="/master/employee/add"
                                        routeLook="/master/employee/list"
                                    />
                                    <CardManager
                                        history={history}
                                        title="Treinadores"
                                        img={workBlack}
                                        description="Gerencie os treinadores"
                                        create="Novo treinador"
                                        look="Todos os treinadores"
                                        routeCreate="/master/trainer/add"
                                        routeLook="/master/trainer/list"
                                    />
                                    <CardManager
                                        history={history}
                                        title="Aprimoramento"
                                        img={upgradeBlack}
                                        description="Gerencie os trabalhos"
                                        create="Novo serviço"
                                        look="Todos os serviços"
                                        routeCreate="/master/upgrade/add"
                                        routeLook="/master/upgrade/list"
                                    />
                                    <CardManager
                                        history={history}
                                        title="Mestre"
                                        img={buildBlack}
                                        description="Gerencie os mestres"
                                        create="Novo mestre"
                                        look="Todos os mestres"
                                        routeCreate="/master/add"
                                        routeLook="/master/list"
                                    />
                                    <CardManager
                                        history={history}
                                        title="Minhas informações"
                                        img={eyeBlack}
                                        description="Veja os seus dados"
                                        create="Treinador"
                                        look="Mestre"
                                        routeCreate="/trainer/profile"
                                        routeLook="/master/profile"
                                    />
                                </div>
                            </div>
                        </UserTemplate>
                    )
            }
        </div>
    )
}