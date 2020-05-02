const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()
const { queryInsertUser, queryFindByCpf, queryDeleteByCpf } = require('../models/user')
const searchByKeyAndUpdate = require('../services/update')
// const { validateUser } = require('../services/validate')

// GET POST UPDATE DELETE

router.get('/user/:cpf', async (req, res) => {
    const cpf = req.params.cpf
    queryFindByCpf.values = [cpf]
    try {
        const user = await pool.query(queryFindByCpf)
        res.send(user.rows[0])
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/user', async (req, res) => {
    // try {
    //     await validateUser(req.body)
    // } catch (e) {
    //     console.log(e)
    //     return res.status(402).send(e)
    // }

    const keys = Object.keys(req.body)
    queryInsertUser.values = []
    keys.map(value => queryInsertUser.values.push(req.body[value]))
    try {
        const newUser = await pool.query(queryInsertUser)

        if (!newUser) {
            return res.status(400).send()
        }
        queryFindByCpf.values = [req.body.cpf]
        const user = await pool.query(`SELECT * FROM Usuario WHERE cpf = '${req.body.cpf}'`)

        res.status(201).send(user.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/user/:cpf', async(req, res) => {
    const cpf = req.params.cpf
    try {
        const query = await searchByKeyAndUpdate(req.body, 'cpf', cpf, queryFindByCpf, ['cep', 'num_casa'], ['nome', 'rua', 'cep'])
        res.send()
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/user/:cpf', async (req, res) => {
    const cpf = req.params.cpf
    queryDeleteByCpf.values = [cpf]
    try {
        const user = await pool.query(queryDeleteByCpf)

        if (!user) {
            return res.status(404).send()
        }

        res.send('sucesso')
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router