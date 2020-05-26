const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()

const { queryInsert, queryFindByCpf, queryDeleteByCpf } = require('../models/plano')

const searchByKeyAndUpdate = require('../utils/update')
const auth = require('../middlewares/auth')
const toArr = require('../utils/toArr')

router.post('/plano', auth, async (req, res) => {
    let data = { cpf: req.user.cpf, ...req.body }
    queryInsert.values = await toArr(data)

    try {
        const userPlan = await pool.query(queryInsert)

        if (!userPlan.rowCount)
            return res.status(400).send()

        queryFindByCpf.values = [req.user.cpf]
        const plan = await pool.query(queryFindByCpf)

        res.status(201).send(plan.rows)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/plano', auth, async (req, res) => {
    queryFindByCpf.values = [req.user.cpf]

    try {
        const plano = await pool.query(queryFindByCpf)

        if (!plano.rowCount)
            return res.status(404).send()

        res.send(plano.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/plano', auth, async (req, res) => {
    try {
        const plano = await searchByKeyAndUpdate(req.body, 'Plano', ['cpf'],
            [req.user.cpf], queryFindByCpf, ['nome', 'codigo_plano', 'valor', 'data_de_inicio', 'duracao'], ['duracao', 'codigo_plano'])

        res.send(plano)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/plano', auth, async (req, res) => {
    queryDeleteByCpf.values = [req.user.cpf]

    try {
        const plan = await pool.query(queryDeleteByCpf)

        if (!plan.rowCount)
            return res.status(404).send()

        res.send({ msg: 'O plano foi deletado.' })
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router