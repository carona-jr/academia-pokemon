const express = require('express')
const pool = require('../db/elephant-sql')
const router = new express.Router()

const auth = require('../middlewares/auth')

router.post('/admin', auth, async (req, res) => {
    let queries = req.body.query.split(';')

    for (let key in queries) {
        queries[key] = queries[key].trim()
    }

    queries = queries.filter(query => query !== '')

    try {
        let response = []
        for (let key in queries) {
            let data = await pool.query(queries[key])
            let field = data.fields.map(field => field.name)
            response.push([field, data.rows])
        }
        res.send(response)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router