import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'

import check from '~/assets/icons/check-black-24dp.svg'
import close from '~/assets/icons/close-black-24dp.svg'

import { api } from '~/services/api'

export default function EditDate({ handleClose, pokemon, inputNumber, time }) {
    const [date, setDate] = useState({})

    async function handleSubmit() {
        try {
            const userCpf = localStorage.getItem('cpf')
            const response = await api.patch('/aprimora', {
                searchTerm: {
                    codigo_pokemon: pokemon.codigo_pokemon,
                    cpf: userCpf,
                    [time]: pokemon[time]
                },
                [time]: date[time]
            }, {
                headers: {
                    Authorization: 'Bearer ' + userCpf
                }
            })
            window.location.reload(true)
        } catch (e) {
            console.log(e.response.data)
            alert(e.response.data)
        }
    }

    console.log(time)

    return (
        <div className="mt-3 d-flex flex-row justify-content-between">
            <div>
                <Form className="w-auto" onSubmit={handleSubmit}>
                    <Form.Group controlId="nome" sm="10">
                        <Form.Control
                            onChange={e => setDate({ ...date, [time]: e.target.value })}
                            type="datetime-local" value={date[time] || ''} />
                    </Form.Group>
                </Form>
            </div>
            <div>
                <button style={{ border: 'none', backgroundColor: '#fff' }}>
                    <img className="hover-cursor" src={check} alt="enviar" onClick={handleSubmit} />
                </button>
            </div>
            <div>
                <img className="hover-cursor" src={close} alt="fechar" onClick={(e) => handleClose(e, pokemon.codigo_pokemon, inputNumber)} />
            </div>
        </div>
    )
}
