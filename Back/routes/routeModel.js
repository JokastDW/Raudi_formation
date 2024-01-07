const express = require('express')
const route = express.Router()
const modelController = require('../controllers/modelController')

route.post('/create', modelController.CreateModel)
route.put('/update/:id', modelController.UpdateModel)
route.get('/all', modelController.AllModels)
route.get('/:id', modelController.ModelId)
route.delete('/delete/:id', modelController.DeleteModel)

module.exports = route
