require('dotenv').config()

const express = require('express')
const sequelize = require('./config/db.js')

const app = express()
const port = 5000 || process.env.PORT

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
