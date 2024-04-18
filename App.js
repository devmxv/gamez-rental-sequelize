require('dotenv').config()

const express = require('express')
const sequelize = require('./server/config/db.js')
const expressLayout = require('express-ejs-layouts')
const methodOverride = require('method-override')

const session = require('express-session')

const app = express()
const port = 5000 || process.env.PORT

// More references
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.use(express.static('public'))
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week duration
    }
  })
)

// Templating engine. expressLayouts helps to use the
// views folder structure
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

// Route definition
app.use('/', require('./server/routes/user.routes'))

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
