const express = require('express')
const route = express.Router()
const userController = require('../controllers/userController')

route.post('/create', userController.CreateUser)
route.put('/update/:id', userController.UpdateUser)
route.get('/all', userController.AllUsers)
route.get('/user/:id', userController.UserId)
route.get('/prd/:id', userController.UserId)

module.exports = route