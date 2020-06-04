const express = require('express')
const userRouter = require('./routes/user')
const pokemonRouter = require('./routes/pokemon')
const mestreRouter = require('./routes/mestre')
const phoneRouter = require('./routes/phone')
const treinadorRouter = require('./routes/treinador')
const proficienciaRouter = require('./routes/proficiencia')
const especialidadeRouter = require('./routes/especialidade')
const trabalhaRouter = require('./routes/trabalha')
const departamentoRouter = require('./routes/departamento')
const planoRouter = require('./routes/plano')
const aprimoraRouter = require('./routes/aprimora')
const admin = require('./routes/admin')
const cors = require('cors')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.use(userRouter)
app.use(pokemonRouter)
app.use(mestreRouter)
app.use(phoneRouter)
app.use(treinadorRouter)
app.use(proficienciaRouter)
app.use(especialidadeRouter)
app.use(planoRouter)
app.use(trabalhaRouter)
app.use(departamentoRouter)
app.use(aprimoraRouter)
app.use(admin)

app.get('/*', (req, res) => {
    res.status('400').send({ msg: 'Rota não encontrada' })
})


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

