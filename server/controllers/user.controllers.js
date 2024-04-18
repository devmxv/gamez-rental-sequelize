const Customer = require('../models/User')

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

