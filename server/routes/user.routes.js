const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controllers')

router.get('/', userController.homepage)

module.exports = router


