const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()
const { queryInsertUser, queryFindByCpf, queryDeleteByCpf } = require('../models/user')
const searchByKeyAndUpdate = require('../utils/update')
const auth = require('../middlewares/auth')
// const { validateUser } = require('../services/validate')

// GET POST UPDATE DELETE

router.get('/user/me', auth, async (req, res) => {
    res.send(req.user)
})

router.get('/user/login', async (req, res) => {
    queryFindByCpf.values = [req.body.cpf]
    const password = req.body.password
    try {
        const user = await pool.query(queryFindByCpf)

        const password = req.body.password
        
        if (password !== user.rows[0].password)
            return res.status(400).send({ error: 'Please authenticate' })

        if (!user.rowCount)
            return res.status(404).send()
            
        res.send(user.rows[0])
    } catch (e) {
        res.status(500).send(e)
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

        if (!newUser.rowCount) {
            return res.status(400).send()
        }
        queryFindByCpf.values = [req.body.cpf]
        const user = await pool.query(`SELECT * FROM Usuario WHERE cpf = '${req.body.cpf}'`)

        res.status(201).send(user.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/user/me', auth, async(req, res) => {
    try {
        const query = await searchByKeyAndUpdate(req.body, 'cpf', req.user.cpf, queryFindByCpf, ['nome', 'rua', 'cep'], ['cep', 'num_casa'])
        res.send(query)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/user/me', auth, async (req, res) => {
    queryDeleteByCpf.values = [req.user.cpf]
    try {
        const user = await pool.query(queryDeleteByCpf)

        if (!user.rowCount) {
            return res.status(404).send()
        }

        res.send({ sucesso: 'Usuário deletado' })
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router