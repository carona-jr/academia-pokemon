const express = require('express') 
const userRouter = require('./routes/user')
const cors = require('cors')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.use(userRouter)

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

