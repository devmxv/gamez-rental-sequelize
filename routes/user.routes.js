const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controllers')

router.get('/', userController.homepage)
router.post('/login', userController.login)
router.get('/users/register', userController.register)
// router.post('/users/new', userController.addUser)

module.exports = router


