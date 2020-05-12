const pool = require('../db/elephant-sql')
const { queryFindByCpf } = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const cpf = req.header('Authorization').replace('Bearer ', '')
        queryFindByCpf.values = [cpf]
        const user = await pool.query(queryFindByCpf)

        if (!user)
            throw new Error({ error: 'Not found' })

        req.user = user.rows[0]
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate' })
    }
}

module.exports = auth