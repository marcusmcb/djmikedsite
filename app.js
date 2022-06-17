const express = require('express')
const cors = require('cors')

const PORT = 5000 || process.env.PORT
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to djmiked.com')
})

app.listen(PORT, () => {
  console.log(`djmiked.com is listening on port: ${PORT}`)
})
