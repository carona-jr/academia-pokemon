const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()

const {
    queryInsert,
    queryFindByCpfAndEspecialidade,
    queryFindByCpf,
    queryDeleteByCpf,
    queryDeleteOne
} = require('../models/especialidade')

const searchByKeyAndUpdate = require('../utils/update')
const auth = require('../middlewares/auth')
const toArr = require('../utils/toArr')

router.post('/especialidade', auth, async (req, res) => {
    const especialidade = req.body.especialidade

    if (!especialidade)
            return res.status(400).send()

    let data = { cpf: req.user.cpf, ...req.body }
    queryInsert.values = await toArr(data)

    try {

        await pool.query(queryInsert)

        queryFindByCpf.values = [req.user.cpf]
        const especialidades = await pool.query(queryFindByCpf)

        res.status(201).send(especialidades.rows)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/especialidade', auth, async (req, res) => {
    try {
        queryFindByCpf.values = [req.user.cpf]
        const especialidade = await pool.query(queryFindByCpf)

        if (!especialidade.rowCount)
            return res.status(404).send()

        res.send(especialidade.rows)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/especialidade', auth, async (req, res) => {
    try {
        const especialidade = await searchByKeyAndUpdate(req.body, 'Especialidade', ['cpf', 'especialidade'],
            [req.user.cpf, req.body.searchTerm], queryFindByCpfAndEspecialidade, ['especialidade'])
        res.send(especialidade)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/especialidade/all', auth, async (req, res) => {
    queryDeleteByCpf.values = [req.user.cpf]

    try {
        const especialidade = await pool.query(queryDeleteByCpf)

        if (!especialidade.rowCount)
            return res.status(404).send()

        res.send({ msg: 'Todas as especialidades foram deletadas.' })
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/especialidade', auth, async (req, res) => {
    queryDeleteOne.values = [req.user.cpf, req.header('especialidade')]

    try {
        const especialidade = await pool.query(queryDeleteOne)

        if (!especialidade.rowCount)
            return res.status(404).send()

        res.send({ msg: 'A especialidade foi deletada.' })
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router