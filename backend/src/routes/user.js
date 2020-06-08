const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()
const bcrypt = require('bcrypt')

const {
    queryInsertUser,
    queryFindByCpf,
    queryDeleteByCpf,
    queryFindByEmail
} = require('../models/user')

const searchByKeyAndUpdate = require('../utils/update')
const auth = require('../middlewares/auth')
const cpfValidator = require('cpf')
const validator = require('validator')
const toArr = require('../utils/toArr')

// const { validateUser } = require('../services/validate')

router.post('/user', async (req, res) => {
    try {
        const formattedCpf = cpfValidator.format(req.body.cpf)
        cpfValidator.isValid(formattedCpf)
    } catch (e) {
        return res.status(400).send({ error: 'O cpf informado não é válido' })
    }

    if (!validator.isEmail(req.body.e_mail))
        return res.status(400).send({ error: 'O e-mail é inválido' })

        
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8)
        
        queryInsertUser.values = await toArr(req.body)
        const newUser = await pool.query(queryInsertUser)

        if (!newUser.rowCount)
            return res.status(400).send()

        queryFindByCpf.values = [req.body.cpf]
        const user = await pool.query(`SELECT * FROM Usuario WHERE cpf = '${req.body.cpf}'`)

        res.status(201).send(user.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/user/me', auth, async (req, res) => {
    if(!req.user)
        return res.status(404).send()
    res.send(req.user)
})

router.post('/user/login', async (req, res) => {
    queryFindByEmail.values = [req.body.e_mail]

    try {
        const user = await pool.query(queryFindByEmail)
        
        if (!user.rowCount)
            return res.status(404).send()

        const isMatch = await bcrypt.compare(req.body.password, user.rows[0].password)

        if (!isMatch)
            return res.status(400).send({ error: 'Please authenticate' })

        res.send(user.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/user/me', auth, async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8)

        const query = await searchByKeyAndUpdate(req.body, 'Usuario', ['cpf'], [req.user.cpf],
            queryFindByCpf, ['nome', 'data_nascimento', 'cpf', 'rg', 'e_mail', 'password', 'rua', 'num_casa', 'bairro', 'cidade', 'estado', 'cep'], ['cep', 'num_casa'])

        res.send(query)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/user/payment', auth, async (req, res) => {
    try {
        const query = await searchByKeyAndUpdate(req.body, 'Usuario', ['cpf'], [req.user.cpf],
            queryFindByCpf, ['num_cartao', 'data_vencimento', 'nome_cartao', 'cod_cartao'])

        res.send(query)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/user/me', auth, async (req, res) => {
    queryDeleteByCpf.values = [req.user.cpf]

    try {
        const user = await pool.query(queryDeleteByCpf)

        if (!user.rowCount)
            return res.status(404).send()

        res.send({ msg: 'O usuário foi deletado.' })
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router