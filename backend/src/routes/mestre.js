const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()
const { queryInsertMestre, queryFindByCpf, queryDeleteByCpf } = require('../models/mestre')
const searchByKeyAndUpdate = require('../utils/update')
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
        res.status(500).send()
    }
})

router.get('/mestre', auth, async (req, res) =>{
    try {
        queryFindByCpf.values = [req.user.cpf]
        const mestre = await pool.query(queryFindByCpf)

        if (!mestre.rowCount) {
            return res.status(404).send()
        }

        res.send(mestre.rows[0])
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/mestre', auth, async(req, res) => {
    try{
        queryDeleteByCpf.values = [req.user.cpf]
        const mestre = await pool.query(queryDeleteByCpf)
        
        if(!mestre.rowCount) {
            return res.status(404).send()
        }
        
        res.send({msg: 'Mestre Apagado com Sucesso'})
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router