const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()

const {
    queryInsertPokemon,
    queryDeleteByCpf,
    queryFindPokemonByCpf,
    queryFindPokemonByCpfAndName,
    queryDeletePokemonByName
} = require('../models/pokemon')

const serachByKeyAndUpdate = require('../utils/update')
const auth = require('../middlewares/auth')
const toArr = require('../utils/toArr')

router.post('/pokemon', auth, async (req, res) => {
    req.body.cpf = req.user.cpf
    queryInsertPokemon.values = await toArr(req.body)

    try {
        const newPokemon = await pool.query(queryInsertPokemon)

        if (!newPokemon.rowCount)
            return res.status(400).send()

        queryFindPokemonByCpf.values = [req.user.cpf]
        const pokemon = await pool.query(queryFindPokemonByCpf)

        res.status(201).send(pokemon.rows)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/pokemon/all', auth, async (req, res) => {
    try {
        queryFindPokemonByCpf.values = [req.user.cpf]
        const pokemon = await pool.query(queryFindPokemonByCpf)

        if (!pokemon.rowCount)
            return res.status(404).send()

        res.send(pokemon.rows)
    } catch (e) {
        res.status(500).send(e)
    }
})


router.get('/pokemon', auth, async (req, res) => {
    queryFindPokemonByCpfAndName.values = [req.user.cpf, req.body.nome]

    try {
        const pokemon = await pool.query(queryFindPokemonByCpfAndName)

        res.send(pokemon.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/pokemon', auth, async (req, res) => {
    try {
        const pokemon = await serachByKeyAndUpdate(req.body, 'Pokemon', ['cpf', 'nome'],
            [req.user.cpf, req.body.searchTerm], queryFindPokemonByCpfAndName, ['nome'])

        res.send(pokemon)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/pokemon/all', auth, async (req, res) => {
    queryDeleteByCpf.values = [req.user.cpf]

    try {
        const pokemon = await pool.query(queryDeleteByCpf)

        if (!pokemon.rowCount)
            return res.status(404).send()

        res.send({ msg: 'Todos os pokémons foram deletados.' })
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/pokemon', auth, async (req, res) => {
    queryDeletePokemonByName.values = [req.user.cpf, req.body.nome]

    try {
        const pokemon = await pool.query(queryDeletePokemonByName)

        if (!pokemon.rowCount)
            return res.status(404).send()

        res.send({ msg: 'O pokémon foi deletado.' })
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router