const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()

const { queryInsertMestre, queryFindByCpf, queryDeleteByCpf } = require('../models/mestre')

const auth = require('../middlewares/auth')

router.post('/mestre', auth, async (req, res) => {
    queryInsertMestre.values = [req.user.cpf]

    try {
        const mestre = await pool.query(queryInsertMestre)

        if (!mestre.rowCount)
            return res.status(400).send()

        queryFindByCpf.values = [req.user.cpf]
        const dataMestre = await pool.query(queryFindByCpf)

        res.status(201).send(dataMestre.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/mestre/all', auth, async  (req, res) => {
    try {
        if (req.query.sortBy && req.query.limit) {
            const parts = req.query.sortBy.split(':')
            const select = `SELECT * FROM Mestre AS t INNER JOIN Usuario AS u ON u.cpf = t.cpf ORDER BY ${req.query.table}.${parts[0]} ${parts[1]} LIMIT ${req.query.limit}0`
            const limitSup = parseInt(req.query.limit) * 10
            const limitInf = limitSup - 10
            
            const mestre = await pool.query(select)
            const arr = mestre.rows.slice(limitInf, limitSup)
            return res.send(arr)
        }   
        const mestre = await pool.query(`SELECT count(cpf) FROM Mestre`)

        if (!mestre.rowCount)
            return res.status(404).send()
        
        res.send(mestre.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/mestre', auth, async (req, res) => {
    try {
        queryFindByCpf.values = [req.user.cpf]
        const mestre = await pool.query(queryFindByCpf)

        if (!mestre.rowCount)
            return res.status(404).send()

        res.send(mestre.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/mestre', auth, async (req, res) => {
    try {
        queryDeleteByCpf.values = [req.header('cpf')]
        const mestre = await pool.query(queryDeleteByCpf)

        if (!mestre.rowCount)
            return res.status(404).send()

        res.send({ msg: 'O mestre foi deletado.' })
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router