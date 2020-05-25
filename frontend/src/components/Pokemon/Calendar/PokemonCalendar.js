import React, { useState, useEffect } from 'react'
import Calendar from './Calendar'
import Spinner from 'react-loading'
import { api } from '../../../services/api'

const today = new Date()

export default function PokemonCalendar() {
    const [data, setData] = useState()
    const [formattedDate, setFormattedDate] = useState()
    const [responseData, setResponseData] = useState()
    const formattedToday = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

    async function loadDays() {
        const unix_timestamp = (today.getTime() / 1000).toFixed(0) - 86400 * 150 // unix - 150 dias para trás, 1 dia = 86400 segundos
        const pastDate = new Date(unix_timestamp * 1000)
        const formatted = `${pastDate.getFullYear()}-${pastDate.getMonth() + 1}-${pastDate.getDate()}`
        setFormattedDate(formatted)

        try {
            const cpf = localStorage.getItem('cpf')
            const response = await api.get('/pokemon/date', {
                headers: {
                    Authorization: 'Bearer ' + cpf,
                    DateToSearch: '2020-05-07'
                }
            })
            setData(response.data)
        } catch (e) {
            setResponseData('empty')
        }
    }


    useEffect(() => {
        loadDays()
    }, [])

    return (
        (data && data.length > 0) ? (
            <>
                <Calendar data={data} today={formattedToday} past={formattedDate} />
            </>
        ) : (responseData === 'empty') ? (
            <div>
                <p>Vc não adicionou nenhum pokémon :(</p>
            </div>
        ) : (
            <div className="d-flex justify-content-center my-5 py-5" >
                <Spinner type="bars" width={'32px'} height={'32px'} color={'blue'} />
            </div>
        )
    )
}