const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()

const {
    queryInsert,
    queryDeleteByCodigoDept,
    queryFindByCodigoDept,
    queryFindByCodigoDeptAndCpf,
    queryFindByCpf
} = require('../models/trabalha')

const searchByKeyAndUpdate = require('../utils/update')
const auth = require('../middlewares/auth')
const toArr = require('../utils/toArr')

router.post('/trabalha', auth, async (req, res) => {
    queryInsert.values = [req.body.codigo_dept, req.body.cpf]
    try {
        await pool.query(queryInsert)

        queryFindByCodigoDept.values = [req.body.codigo_dept]
        const data = await pool.query(queryFindByCodigoDept)

        res.status(201).send(data.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/trabalha/all', auth, async  (req, res) => {
    try {
        if (req.query.sortBy && req.query.limit) {
            const parts = req.query.sortBy.split(':')
            const select = `SELECT * FROM Trabalha as t INNER JOIN Usuario as u ON u.cpf = t.cpf INNER JOIN Departamento as d ON d.codigo_dept = t.codigo_dept ORDER BY ${req.query.table}.${parts[0]} ${parts[1]} LIMIT ${req.query.limit}0`
            const limitSup = parseInt(req.query.limit) * 10
            const limitInf = limitSup - 10
            
            const trabalha = await pool.query(select)
            const arr = trabalha.rows.slice(limitInf, limitSup)
            return res.send(arr)
        }   
        
        const trabalha = await pool.query(`SELECT count(cpf) FROM Trabalha`)

        if (!trabalha.rowCount)
            return res.status(404).send()
        
        res.send(trabalha.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/trabalha', auth, async (req, res) => {
    try {
        queryFindByCodigoDeptAndCpf.values = [req.header('codigo_dept'), req.header('cpf')]
        const trabalha = await pool.query(queryFindByCodigoDeptAndCpf)

        if (!trabalha.rowCount)
            return res.status(404).send()

        res.send(trabalha.rows[0])
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
    queryDeleteByCodigoDept.values = [req.header('codigo_dept'), req.header('cpf')]

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