import React, { useState, useEffect } from 'react'
import PieChart from './piechart'
import Spinner from 'react-loading'
import { api } from '../../../services/api'

export default function PokemonByType() {
    let arr = []
    const [chartData, setChartData] = useState()
    const [responseData, setResponseData] = useState()
    const colors = {
        água: "hsl(222, 83%, 48%)",
        dragão: "hsl(188, 37%, 43%)",
        elétrico: "hsl(60, 77%, 53%)",
        fantasma: "hsl(240, 35%, 31%)",
        fada: "hsl(339, 70%, 35%)",
        fogo: "hsl(358, 69%, 40%)",
        gelo: "hsl(199, 85%, 74%)",
        inseto: "hsl(134, 46%, 20%)",
        lutador: "hsl(14, 61%, 37%)",
        metálico: "hsl(160, 10%, 42%)",
        normal: "hsl(343, 18%, 39%)",
        noturno: "hsl(180, 27%, 2%)",
        pedra: "hsl(14, 73%, 16%)",
        planta: "hsl(144, 72%, 28%)",
        psíquico: "hsl(328, 59%, 41%)",
        terra: "hsl(33, 58%, 42%)",
        venenoso: "hsl(272, 51%, 36%)",
        voador: "hsl(206, 26%, 39%)"
    }

    const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

    async function loadData() {
        try {
            const cpf = localStorage.getItem('cpf')
            const response = await api.get('/pokemon/countByType', {
                headers: {
                    Authorization: 'Bearer ' + cpf
                }
            })
            response.data.map(value => {
                const tipo = capitalize(value.classificacao)
                console.log(colors[value.classificacao], value.classificacao)
                arr.push({
                    id: tipo,
                    label: tipo,
                    value: parseInt(value.quantidade),
                    color: colors[value.classificacao]
                })
            })
            setChartData(arr)
        } catch (e) {
            setResponseData('empty')
        }
    }

    useEffect(() => {
        loadData()
        // eslint-disable-next-line
    }, [])

    return (
        (chartData && chartData.length > 0) ? (
            <>
                <PieChart data={chartData}/>
            </>
        ) : (responseData === 'empty') ? (
            <div>
                <p>Você ainda não adicionou nenhum pokémon :(</p>
            </div>
        ) : (
            <div className="d-flex justify-content-center my-5 py-5" >
                <Spinner type="bars" width={'32px'} height={'32px'} color={'blue'}/>
            </div>
        )
    )
}