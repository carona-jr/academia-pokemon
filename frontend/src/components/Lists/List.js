import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-loading'

import editImg from '~/assets/icons/edit-black-24dp.svg'
import deleteImg from '~/assets/icons/delete-black-24dp.svg'

import { api } from '~/services/api'

export default function List({ names, routeGet, routeDelete, sort, titles, date, canEdit, editRoute, pkey }) {
    const [user, setUser] = useState()
    const userCpf = localStorage.getItem('cpf')

    async function loadData() {
        try {
            const response = await api.get(`${routeGet}?sortBy=${sort.sortBy[0]}:${sort.sortBy[1]}&limit=${sort.limit}&table=${sort.table}`, {
                headers: {
                    Authorization: 'Bearer ' + userCpf
                }
            })
            setUser(response.data)
        } catch (e) {
        }
    }

    async function handleDelete(e, item) {
        e.preventDefault()
        let data = {}
        for (let key in pkey) {
            data[pkey[key]] = item[pkey[key]]
        }
        try {
            await api.delete(`${routeDelete}`,
                {
                    headers: {
                        Authorization: 'Bearer ' + userCpf,
                        ...data
                    }
                })
            if (localStorage.getItem('cpf') === item.cpf && routeDelete === '/mestre')
                localStorage.setItem('mhaighstir', false)
            window.location.reload(true)
        } catch (e) {
        }
    }

    useEffect(() => {
        loadData()
        // eslint-disable-next-line
    }, [sort])

    return (
        user ? (
            <Table className="m-0 p-0" striped bordered hover responsive>
                <thead>
                    <tr>
                        {
                            titles.map(item => {
                                return (
                                    <th key={item} style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                                        {item}
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                {
                    user.map(item => {
                        return (
                            <tbody key={pkey.map(value => item[value])}>
                                <tr>
                                    {
                                        names.map(component => {
                                            return (
                                                <td key={component} style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                                                    {
                                                        !date.includes(component) ? (
                                                            <>
                                                                {item[component]}
                                                            </>
                                                        ) : (
                                                                <>
                                                                    {item[component].slice(0, 19).split('T').join(' ')}
                                                                </>
                                                            )
                                                    }
                                                </td>
                                            )
                                        })
                                    }

                                    <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                                        {
                                            canEdit ? (
                                                <a className="m-0 mr-3 p-0" href={`/master/${editRoute}/edit`} onClick={() =>
                                                    localStorage.setItem(editRoute, pkey.map(value => item[value]).join())
                                                }>
                                                    <img src={editImg} alt="edit"></img>
                                                </a>

                                            ) : (
                                                    <></>
                                                )
                                        }
                                        <a className="m-0 p-0" href={`/master/${editRoute}/list`} onClick={(e) => handleDelete(e, item)}>
                                            <img src={deleteImg} alt="apagar"></img>
                                        </a>
                                    </td>
                                </tr>

                            </tbody>
                        )
                    })
                }
            </Table>
        ) : (
                <div className="d-flex justify-content-center my-5 py-5" >
                    <Spinner type="bars" width={'32px'} height={'32px'} color={'green'} />
                </div>
            )
    )
}
