const db = require('../models/index')
const Bcrypt = require('bcrypt')
const User = require('../models').User
const jwt = require('jsonwebtoken')

require('dotenv').config()


exports.homepage = async (req, res) => {
  const locals = {
    title: 'Gamez Rental',
    description: 'Retro game rental'
  }
  try {
    res.render('index', {
      locals
    })
  } catch (error) {
    console.log(error)
  }
}


exports.login = async (req, res) => {
  //console.log(req.body)
  try {
    const { userName, password } = req.body

    const user = await User.findOne({
      where: { userName },
    })
    console.log(user)
    if (!user) {
      res.render('login')
    } else {
      Bcrypt.compare(password, user.password, (error, result) => {
        if (result) {
          const token = jwt.sign(
            {
              name: user.firstName,
              email: user.email
            }, process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '300s' }
          )
          res.render('dashboard', {
            userName,
          })
        } else {
          res.render('login')
        }
      })
    }
  } catch (error) {
    const msg = 'Error en inicio de sesión'
    res.json(error)
  }
}

exports.register = async (req, res) => {
  const locals = {
    title: 'Gamez Rental',
    description: 'Registrarse'
  }

  try {
    res.render('register', {
      locals
    })
  } catch (error) {
    console.log(error)
  }
}

exports.addUser = async (req, res) => {
  console.log(req.body)

  const { firstName, lastName, userName, email, password, phone, altPhone } = req.body
  // Password encryption, 12 is the level of complexity for salting pass
  const passEncypted = await Bcrypt.hash(password, 12)
  const STATUS = 'P'

  try {
    const newUser = await db.User.create({
      firstName,
      lastName,
      userName,
      email,
      "password": passEncypted,
      phone,
      altPhone,
      "status": STATUS
    })
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
}
