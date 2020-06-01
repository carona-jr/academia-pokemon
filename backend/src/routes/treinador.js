const express = require('express')
const pool = requirae('../db/elephant-sql')
const router = new express.Router()

const { queryInsertTreinador, queryFindByCpf, queryDeleteByCpf } = require('../models/treinador')

const searchByKeyAndUpdate = require('../utils/update')
const auth = require('../middlewares/auth')
const toArr = require('../utils/toArr')

router.post('/treinador', auth, async (req, res) => {
    const values = await toArr(req.body)
    queryInsertTreinador.values = [...values]

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

router.get('/treinador/all', auth, async  (req, res) => {
    try {
        if (req.query.sortBy && req.query.limit) {
            const parts = req.query.sortBy.split(':')
            const select = `SELECT * FROM Treinador AS t INNER JOIN Usuario AS u ON u.cpf = t.cpf ORDER BY ${req.query.table}.${parts[0]} ${parts[1]} LIMIT ${req.query.limit}0`
            const limitSup = parseInt(req.query.limit) * 10
            const limitInf = limitSup - 10
            
            const treinador = await pool.query(select)
            const arr = treinador.rows.slice(limitInf, limitSup)
            return res.send(arr)
        }   
        const treinador = await pool.query(`SELECT count(cpf) FROM Treinador`)

        if (!treinador.rowCount)
            return res.status(404).send()
        
        res.send(treinador.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/treinador', auth, async (req, res) => {
    try {
        const treinador = await searchByKeyAndUpdate(req.body, 'Treinador', ['cpf'], [req.user.cpf],
            queryFindByCpf, ['cpts', 'salario_base', 'instituto'])

        res.send(treinador)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/treinador', auth, async (req, res) => {
    queryDeleteByCpf.values = [req.header('cpf')]
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