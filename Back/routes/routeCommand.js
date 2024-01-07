const express = require('express')
const route = express.Router()
const commandController = require('../controllers/commandController')

route.post('/create', commandController.CreateCom)
route.put('/update/:id', commandController.UpdateCom)
route.get('/all', commandController.AllCommands)
route.get('/:id', commandController.ComId)
route.delete('/delete/:id', commandController.DeleteCom)

module.exports = route
