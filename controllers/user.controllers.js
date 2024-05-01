const db = require('../models/index')
const User = require('../models/user')


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
  const locals = {
    title: 'Gamez Rental - Login',
    description: 'User login'
  }
  try {
    res.render('login', {
      locals
    })
  } catch (error) {
    console.log(error)
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
  const STATUS = 'P'

  try {
    const newUser = await db.User.create({
      firstName,
      lastName,
      userName,
      email,
      password,
      phone,
      altPhone,
      "status": STATUS
    })
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
}
