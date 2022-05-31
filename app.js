const express = require('express')
const cors = require('cors')

const PORT = 5000 || process.env.PORT
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send("<h3>Welcome to djmiked.com</h3>")
})

app.listen(PORT, () => {
    console.log(`djmiked.com is listening on port: ${PORT}`)
})