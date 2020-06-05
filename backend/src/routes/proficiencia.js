const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()

const {
    queryInsert,
    queryFindByCpf,
    queryDeleteByCpf,
    queryDeleteByCpfAndProf,
    queryFindByCpfAndProf
} = require('../models/proficiencia')

const searchByKeyAndUpdate = require('../utils/update')
const auth = require('../middlewares/auth')

router.post('/proficiencia', auth, async (req, res) => {
    const proficiencia = req.body.proficiencia.toLowerCase()

    if (!proficiencia)
        return res.status(400).send()

    queryInsert.values = [req.user.cpf, proficiencia]

    try {
        await pool.query(queryInsert)

        queryFindByCpf.values = [req.user.cpf]
        const proficiencia = await pool.query(queryFindByCpf)

        res.status(201).send(proficiencia.rows)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/proficiencia', auth, async (req, res) => {
    try {
        queryFindByCpf.values = [req.user.cpf]
        const proficiencia = await pool.query(queryFindByCpf)

        if (!proficiencia.rowCount)
            return res.status(404).send()

        res.send(proficiencia.rows)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/proficiencia', auth, async (req, res) => {
    try {
        const proficiencia = await searchByKeyAndUpdate(req.body, 'Proficiencia', ['cpf', 'proficiencia'],
            [req.user.cpf, req.body.searchTerm], queryFindByCpfAndProf, ['proficiencia'])

        res.send(proficiencia)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/proficiencia/all', auth, async (req, res) => {
    queryDeleteByCpf.values = [req.user.cpf]

    try {
        const proficiencia = await pool.query(queryDeleteByCpf)

        if (!proficiencia.rowCount)
            return res.status(404).send()

        res.send({ msg: 'Todas as proficiencias foram deletadas.' })
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/proficiencia', auth, async (req, res) => {
    queryDeleteByCpfAndProf.values = [req.user.cpf, req.header('proficiencia')]
    try {
        const proficiencia = await pool.query(queryDeleteByCpfAndProf)

        if (!proficiencia.rowCount)
            return res.status(404).send()

        res.send({ msg: 'A proficiencia foi deletada.' })
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router