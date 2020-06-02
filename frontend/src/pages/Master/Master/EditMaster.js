import React from 'react'
import UserTemplate from '~/templates/UserTemplate'

export default function EditMaster() {
    return (
        <div>
            {
                (!localStorage.getItem('cpf') || !localStorage.getItem('mhaighstir')) ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>
                            <div className="w-100 d-flex flex-column mb-5">
                                <h2 className="text-center">Editar dados do treinador <span style={{ textTransform: 'capitalize' }}>{userName}</span></h2>
                            </div>
                            <EditList
                                history={history}
                                path="/master/"
                                name=""
                                searchTerm={localStorage.getItem('')}
                                routePatch="/mestre"
                                routeGet="/mestre/me"
                                allowedUpdates={['', '', '']}
                                updates={[
                                    {
                                        name: 'cpf',
                                        displayName: 'cpf Mestre',
                                        type: 'text',
                                        placeholder: '001002003'
                                    }

                                ]}
                            />

                            <div className="w-100 mt-5">
                                <EditAttribute />
                            </div>
                        </UserTemplate>
                    )
            }
            
        </div>
    )
}
