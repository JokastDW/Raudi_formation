const express = require('express')
const route = express.Router()
const userController = require('../controllers/userController')

route.post('/create', userController.CreateUser)
route.put('/update/:id', userController.UpdateUser)
route.get('/all', userController.AllUsers)
route.get('/:id', userController.UserId)
route.post('/register', userController.Register)
route.post('/login', userController.Login)
route.delete("/delete/:id", userController.DeleteUser)

module.exports = route