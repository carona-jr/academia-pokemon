import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import check from '../assets/icons/check-black-24dp.svg'
import close from '../assets/icons/close-black-24dp.svg'

import { api } from '../services/api'

export default function EditPhone({ edit, setEdit, phone, setPhone, num }) {
    const [phones] = useState(JSON.parse(localStorage.getItem('phones')))

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await api.patch('/user/phone', {
                searchTerm: phones[num].numero_de_telefone,
                numero_de_telefone: phone.numero_de_telefone
            }, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('cpf')
                }
            })

            const responsePhone = await api.get('/user/phone', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('cpf')
                }
            })
            localStorage.setItem('phones', JSON.stringify(responsePhone.data))
            window.location.reload(true)
        } catch (e) {
            alert(e.response.data)
        }
        setEdit(false)
    }

    return (
        <div>
            {
                (edit) ? (
                    <div className="d-flex flex-column flex-md-row justify-content-center ml-3" style={{ transition: '1s' }}>
                        <Form className="mr-3 d-flex flex-column flex-md-row justify-content-center" onSubmit={handleSubmit}>
                            <Form.Group className="mr-3" controlId="phone">
                                <Form.Control
                                    className="m-0 px-2" style={{ width: '160px', height: '24px', lineHeight: '24px' }}
                                    onChange={e => setPhone({ ...phone, numero_de_telefone: e.target.value })}
                                    type="text" value={phone.numero_de_telefone || ''} />
                            </Form.Group>
                            <button className="mr-3" style={{ width: '24px', height: '24px', padding: 0, margin: 0, border: 'none', backgroundColor: '#fff' }} type="submit">
                                <img style={{ width: '24px', height: '24px' }} src={check} alt="edit"></img>
                            </button>
                        </Form>
                        <button className="mr-3" style={{ width: '24px', height: '24px', padding: 0, margin: 0, border: 'none', backgroundColor: '#fff' }} type="button"
                            onClick={() => setEdit(false)}>
                            <img style={{ width: '24px', height: '24px' }} src={close} alt="edit"></img>
                        </button>
                    </div>
                ) : (
                        <></>
                    )
            }
        </div>
    )
}
