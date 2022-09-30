const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('It works')
})

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})

module.exports = app