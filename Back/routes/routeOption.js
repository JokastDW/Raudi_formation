const express = require('express')
const route = express.Router()
const optionController = require('../controllers/optionController')

route.post('/create', optionController.CreateOption)
route.put('/update/:id', optionController.UpdateOption)
route.get('/all', optionController.AllOptions)
route.get('/:id', optionController.OptionId)
route.delete('/delete/:id', optionController.DeleteOption)

module.exports = route
