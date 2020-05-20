const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()

const {
    queryInsertPokemon,
    queryDeleteByCpf,
    queryFindPokemonByCpf,
    queryFindPokemonByCpfAndName,
    queryDeletePokemonByName,
    queryFindPokemonByCpfTopByNivel,
    queryFindPokemonByCpfTopByData,
    queryFindPokemonByCpfCountByType,
    queryFindPokemonByCountByDate
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

router.get('/pokemon/top3', auth, async (req, res) => {
    try {
        queryFindPokemonByCpfTopByNivel.values = [req.user.cpf]
        const pokemon = await pool.query(queryFindPokemonByCpfTopByNivel)

        if (!pokemon.rowCount)
            return res.status(404).send()

        res.send(pokemon.rows)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/pokemon/top', auth, async (req, res) => {
    try {
        queryFindPokemonByCpfTopByData.values = [req.user.cpf]
        const pokemon = await pool.query(queryFindPokemonByCpfTopByData)

        if (!pokemon.rowCount)
            return res.status(404).send()

        res.send(pokemon.rows)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/pokemon/countByType', auth, async (req, res) => {
    try {
        queryFindPokemonByCpfCountByType.values = [req.user.cpf]
        const pokemon = await pool.query(queryFindPokemonByCpfCountByType)

        if (!pokemon.rowCount)
            return res.status(404).send()

        res.send(pokemon.rows)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/pokemon/date', auth, async (req, res) => {
    try {
        queryFindPokemonByCountByDate.values = [req.user.cpf, req.header('DateToSearch')]
        const pokemon = await pool.query(queryFindPokemonByCountByDate)

        if (!pokemon.rowCount)
            return res.status(404).send()
            
        let arr = []
        for(let i = 0; i < pokemon.rows.length; i++){
            arr.push({ date: `${pokemon.rows[i].year}-${pokemon.rows[i].month}-${pokemon.rows[i].day}`, count: parseInt(pokemon.rows[i].count) })
        }

        res.send(arr)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/pokemon/all', auth, async  (req, res) => {
    try {
        if (req.query.sortBy && req.query.limit) {
            const parts = req.query.sortBy.split(':')
            const select = `SELECT * FROM Pokemon WHERE cpf = '${req.user.cpf}' ORDER BY ${parts[0]} ${parts[1]} LIMIT ${req.query.limit}0`
            const limitSup = parseInt(req.query.limit) * 10
            const limitInf = limitSup - 10
            
            const pokemon = await pool.query(select)
            const arr = pokemon.rows.slice(limitInf, limitSup)
            return res.send(arr)
        }   
        queryFindPokemonByCpf.values = [req.user.cpf]
        const pokemon = await pool.query(`SELECT count(codigo_pokemon) FROM Pokemon WHERE cpf = '${req.user.cpf}'`)

        if (!pokemon.rowCount)
            return res.status(404).send()

        res.send(pokemon.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})


router.get('/pokemon', auth, async (req, res) => {
    queryFindPokemonByCpfAndName.values = [req.user.cpf, req.body.nome.toLowerCase()]

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
    queryDeletePokemonByName.values = [req.user.cpf, req.body.nome.toLowerCase()]

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

