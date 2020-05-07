const express = require('express') 
const userRouter = require('./routes/user')
const pokemonRouter = require('./routes/pokemon')
const mestreRouter = require('./routes/mestre')
const phoneRouter = require('./routes/phone')
const treinadorRouter = require('./routes/treinador')
const proficienciaRouter = require('./routes/proficiencia')
const especialidadeRouter = require('./routes/especialidade')
const cors = require('cors')
const planoRouter = require('./routes/plano')

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
 
app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

