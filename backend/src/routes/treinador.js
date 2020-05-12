const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()

const { queryInsertTreinador, queryFindByCpf, queryDeleteByCpf } = require('../models/treinador')

const searchByKeyAndUpdate = require('../utils/update')
const auth = require('../middlewares/auth')

router.post('/treinador', auth, async (req, res) => {
    const keys = Object.keys(req.body)
    queryInsertTreinador.values = [req.user.cpf]
    keys.map(value => queryInsertTreinador.values.push(req.body[value]))

    try {
        const newTreinador = await pool.query(queryInsertTreinador)

        if (!newTreinador.rowCount)
            return res.status(400).send()

        queryFindByCpf.values = [req.user.cpf]
        const treinador = await pool.query(queryFindByCpf)

        res.status(201).send(treinador.rows)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/treinador/me', auth, async (req, res) => {
    try {
        queryFindByCpf.values = [req.user.cpf]
        const treinador = await pool.query(queryFindByCpf)

        if (!treinador.rowCount)
            return res.status(404).send()

        res.send(treinador.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/treinador', auth, async (req, res) => {
    try {
        const pokemon = await searchByKeyAndUpdate(req.body, 'Treinador', ['cpf'], [req.user.cpf],
            queryFindByCpf, ['cpts', 'salario_base', 'instituto'])

        res.send(pokemon)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/treinador', auth, async (req, res) => {
    queryDeleteByCpf.values = [req.user.cpf]
    try {
        const treinador = await pool.query(queryDeleteByCpf)

        if (!treinador)
            return res.status(404).send()

        res.send({ msg: 'O treinador foi deletado.' })
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router