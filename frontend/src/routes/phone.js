const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()

const {
    queryInsertPhone,
    queryFindByCpfAndPhone,
    queryFindByCpf,
    queryDeleteByCpf,
    queryDeleteOnePhone
} = require('../models/phone')

const auth = require('../middlewares/auth')
const serachByKeyAndUpdate = require('../utils/update')

router.post('/user/phone', auth, async (req, res) => {
    const cpf = req.user.cpf
    const telefone = req.body.telefone

    try {
        if (telefone.celular) {
            queryInsertPhone.values = [cpf, telefone.celular]
            await pool.query(queryInsertPhone)
        }

        if (telefone.residencia) {
            queryInsertPhone.values = [cpf, telefone.residencia]
            await pool.query(queryInsertPhone)
        }

        if (telefone.residencia || telefone.celular) {
            queryFindByCpf.values = [cpf]
            const telefones = await pool.query(queryFindByCpf)
            return res.status(201).send(telefones.rows)
        }
        res.status(400).send({ msg: 'Nenhum telefone foi adicionado' })
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/user/phone', auth, async (req, res) => {
    try {
        queryFindByCpf.values = [req.user.cpf]
        const telefones = await pool.query(queryFindByCpf)

        res.send(telefones.rows)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/user/phone', auth, async (req, res) => {
    try {
        const telefone = await serachByKeyAndUpdate(req.body, 'Telefone', ['cpf', 'numero_de_telefone'],
            [req.user.cpf, req.body.searchTerm], queryFindByCpfAndPhone, ['numero_de_telefone'])

        res.send(telefone)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/user/phone/all', auth, async (req, res) => {
    queryDeleteByCpf.values = [req.user.cpf]

    try {
        const telefones = await pool.query(queryDeleteByCpf)

        if (!telefones.rowCount)
            return res.status(404).send()

        res.send({ msg: 'Todos os telefones foram deletados.' })
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/user/phone', auth, async (req, res) => {
    queryDeleteOnePhone.values = [req.user.cpf, req.body.telefone]

    try {
        const telefone = await pool.query(queryDeleteOnePhone)

        if (!telefone.rowCount)
            return res.status(404).send()

        res.send({ msg: 'O telefone foi deletado.' })
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router