const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()
const momentTz = require('moment-timezone')
const moment = require('moment')

const {
    queryInsert,
    queryFindByCodigo_pokemon,
    queryDeleteByCodigo_pokemon,
    queryDeleteByCodPokemonAndCpfAndHour,
    queryFindByCodigoDeptAndHour,
    queryFindByCpf,
    queryFindByCodPokemonAndCpfAndHour
} = require('../models/aprimora')

const serachByKeyAndUpdate = require('../utils/update')
const auth = require('../middlewares/auth')
const toArr = require('../utils/toArr')

router.post('/aprimora', auth, async (req, res) => {
    try {
        queryInsert.values = await toArr(req.body)
        const newAprimora = await pool.query(queryInsert)

        if (!newAprimora.rowCount)
            return res.status(400).send()

        queryFindByCodigo_pokemon.values = [req.body.codigo_pokemon]
        const aprimora = await pool.query(queryFindByCodigo_pokemon)

        res.status(201).send(aprimora.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

// SELECT * FROM Aprimora as a INNER JOIN Pokemon as p ON p.codigo_pokemon = a.codigo_pokemon WHERE cpf = $1

router.get('/aprimora/treinador', auth, async (req, res) => {
    try {
        if (req.query.sortBy && req.query.limit) {
            const parts = req.query.sortBy.split(':')
            const select = `SELECT * FROM Aprimora as a INNER JOIN Pokemon as p ON p.codigo_pokemon = a.codigo_pokemon WHERE p.cpf = '${req.user.cpf}' ORDER BY p.${parts[0]} ${parts[1]} LIMIT ${req.query.limit}0`
            const limitSup = parseInt(req.query.limit) * 10 
            const limitInf = limitSup - 10
            
            const aprimora = await pool.query(select)
            const arr = aprimora.rows.slice(limitInf, limitSup)

            // arr.map(value => {
            //     if (value.hora_de_entrada) {
            //         value.hora_de_entrada = momentTz(value.hora_de_entrada).tz('America/Argentina/Buenos_Aires').format('YYYY-MM-DDTHH:mm:ss')
            //     }
            //     if (value.hora_de_saida) {
            //         value.hora_de_saida = momentTz(value.hora_de_saida).tz('America/Argentina/Buenos_Aires').format('YYYY-MM-DDTHH:mm:ss')
            //     }
            //     if (value.data_cadastro) {
            //         value.data_cadastro = momentTz(value.data_cadastro).tz('America/Argentina/Buenos_Aires').format('YYYY-MM-DDTHH:mm:ss')
            //     }
            // })
            return res.send(arr)
        }   
        const aprimora = await pool.query(`SELECT count(codigo_pokemon) FROM Aprimora WHERE cpf = '${req.user.cpf}'`)

        if (!aprimora.rowCount)
            return res.status(404).send()
        
        res.send(aprimora.rows[0])
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

router.get('/aprimora/mestre', auth, async (req, res) => {
    try {
        if (req.query.sortBy && req.query.limit) {
            const parts = req.query.sortBy.split(':')
            const select = `SELECT a.codigo_pokemon, a.cpf, a.hora_de_entrada, a.hora_de_saida, p.nome as nome_pokemon, p.nivel, p.nivel_objetivo, p.data_de_entrada, p.data_de_saida, p.data_cadastro, u.nome FROM Aprimora as a LEFT JOIN Pokemon as p ON p.codigo_pokemon = a.codigo_pokemon INNER JOIN Usuario as u ON u.cpf = a.cpf ORDER BY p.${parts[0]} ${parts[1]} LIMIT ${req.query.limit}0`
            const limitSup = parseInt(req.query.limit) * 10 
            const limitInf = limitSup - 10
            
            const aprimora = await pool.query(select)
            const arr = aprimora.rows.slice(limitInf, limitSup)

            // arr.map(value => {
            //     if (value.hora_de_entrada) {
            //         value.hora_de_entrada = momentTz(value.hora_de_entrada).tz('America/Argentina/Buenos_Aires').format('YYYY-MM-DDTHH:mm:ss')
            //     }
            //     if (value.hora_de_saida) {
            //         value.hora_de_saida = momentTz(value.hora_de_saida).tz('America/Argentina/Buenos_Aires').format('YYYY-MM-DDTHH:mm:ss')
            //     }
            //     if (value.data_cadastro) {
            //         value.data_cadastro = momentTz(value.data_cadastro).tz('America/Argentina/Buenos_Aires').format('YYYY-MM-DDTHH:mm:ss')
            //     }
            // })
            return res.send(arr)
        }   
        const aprimora = await pool.query(`SELECT count(codigo_pokemon) FROM Aprimora WHERE cpf = '${req.user.cpf}'`)

        if (!aprimora.rowCount)
            return res.status(404).send()
        
        res.send(aprimora.rows[0])
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

router.get('/aprimora', auth, async (req, res) => {
    try {
        queryFindByCodPokemonAndCpfAndHour.values = [req.header('codigo_pokemon'), req.header('cpf'), req.header('hora_de_entrada')]
        const aprimora = await pool.query(queryFindByCodPokemonAndCpfAndHour)

        if (!aprimora.rowCount)
            return res.status(404).send()

        res.send(aprimora.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/aprimora', auth, async (req, res) => {
    const cpf = req.body.searchTerm.cpf
    const codigo = req.body.searchTerm.codigo_pokemon
    const hora_de_entrada = req.body.searchTerm.hora_de_entrada

    if (req.body.hora_de_entrada)
        req.body.hora_de_entrada = moment(req.body.hora_de_entrada).format('YYYY-MM-DD HH:mm:ss')
    if (req.body.hora_de_saida)
        req.body.hora_de_saida = moment(req.body.hora_de_saida).format('YYYY-MM-DD HH:mm:ss')

    try {
        const aprimora = await serachByKeyAndUpdate(req.body, 'Aprimora', ['codigo_pokemon', 'cpf', 'hora_de_entrada'],
            [codigo, cpf, hora_de_entrada], queryFindByCodigoDeptAndHour,
            ['codigo_pokemon', 'cpf', 'hora_de_entrada', 'hora_de_saida'], ['codigo_pokemon'])

        res.send(aprimora)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/aprimora/all', auth, async (req, res) => {
    queryDeleteByCodigo_pokemon.values = [req.body.codigo_pokemon]

    try {
        const aprimora = await pool.query(queryDeleteByCodigo_pokemon)

        if (!aprimora.rowCount)
            return res.status(404).send()

        res.send({ msg: 'Todos os aprimoramentos foram deletados.' })
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/aprimora', auth, async (req, res) => {
    queryDeleteByCodPokemonAndCpfAndHour.values = [req.header('codigo_pokemon'), req.header('cpf'), req.header('hora_de_entrada')]

    try {
        const aprimora = await pool.query(queryDeleteByCodPokemonAndCpfAndHour)

        if (!aprimora.rowCount)
            return res.status(404).send()

        res.send({ msg: 'O aprimoramento foi deletado.' })
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router