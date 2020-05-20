const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()

const {
    queryInsert,
    queryDeleteByCodigoDept,
    queryFindByCodigoDept,
    queryFindByCodigoDeptAndCpf
} = require('../models/trabalha')

const searchByKeyAndUpdate = require('../utils/update')
const auth = require('../middlewares/auth')
const toArr = require('../utils/toArr')

router.post('/trabalha', auth, async (req, res) => {
    queryInsert.values = await toArr(req.body)

    try {
        await pool.query(queryInsert)

        queryFindByCodigoDept.values = [req.body.codigo_dept]
        const data = await pool.query(queryFindByCodigoDept)

        res.status(201).send(data.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/trabalha', auth, async (req, res) => {
    try {
        queryFindByCodigoDept.values = [req.body.codigo_dept]
        const trabalha = await pool.query(queryFindByCodigoDept)

        if (!trabalha.rowCount)
            return res.status(404).send()

        res.send(trabalha.rows)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/trabalha', auth, async (req, res) => {
    const codigo = req.body.searchTerm.codigo_dept
    const cpf = req.body.searchTerm.cpf

    try {
        const trabalha = await searchByKeyAndUpdate(req.body, 'Trabalha', ['codigo_dept', 'cpf'], [codigo, cpf],
            queryFindByCodigoDeptAndCpf, ['codigo_dept', 'cpf'], ['codigo_dept'])

        res.send(trabalha)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/trabalha', auth, async (req, res) => {
    queryDeleteByCodigoDept.values = [req.body.codigo_dept, req.body.cpf]

    try {
        const trabalha = await pool.query(queryDeleteByCodigoDept)

        if (!trabalha.rowCount)
            return res.status(404).send()

        res.send({ msg: 'O funcionário foi deletado.' })
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router