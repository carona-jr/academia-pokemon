const { Pool } = require('pg')
const connectionString = process.env.PG_KEY

const pool = new Pool({
    connectionString
})

module.exports = pool