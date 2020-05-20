const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()

const {
    queryInsert,
    queryFindByCodigo_pokemon,
    queryDeleteByCodigo_pokemon,
    queryDeleteByCodPokemonAndCpfAndHour,
    queryFindByCodigoDeptAndHour,
    queryFindByCpf
} = require('../models/aprimora')

const serachByKeyAndUpdate = require('../utils/update')
const auth = require('../middlewares/auth')

router.post('/aprimora', auth, async (req, res) => {
    queryInsert.values = await toArr(data)

    try {
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

router.get('/aprimora/pokemon', auth, async (req, res) => {
    try {
        queryFindByCodigo_pokemon.values = [req.body.codigo_pokemon]
        const aprimora = await pool.query(queryFindByCodigo_pokemon)

        if (!aprimora.rowCount)
            return res.status(404).send()

        res.send(aprimora.rows)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/aprimora/treinador', auth, async (req, res) => {
    try {
        queryFindByCpf.values = [req.body.cpf]
        const aprimora = await pool.query(queryFindByCpf)

        if (!aprimora.rowCount)
            return res.status(404).send()

        res.send(aprimora.rows)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/aprimora', auth, async (req, res) => {
    const cpf = req.body.searchTerm.cpf
    const codigo = req.body.searchTerm.codigo_pokemon
    const hora_de_entrada = req.body.searchTerm.hora_de_entrada

    try {
        const aprimora = await serachByKeyAndUpdate(req.body, 'Aprimora', ['codigo_pokemon', 'cpf', 'hora_de_entrada'],
            [codigo, cpf, hora_de_entrada], queryFindByCodigoDeptAndHour,
            ['codigo_pokemon', 'cpf', 'hora_de_saida'], ['codigo_pokemon'])

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
    queryDeleteByCodPokemonAndCpfAndHour.values = [req.body.codigo_pokemon, req.body.cpf, req.body.hora_de_entrada]

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