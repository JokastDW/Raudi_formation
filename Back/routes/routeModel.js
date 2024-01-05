const express = require('express')
const route = express.Router()
const modelController = require('../controllers/modelController')

route.post('/create', modelController.CreateModel)
route.put('/update/:id', modelController.UpdateModel)
route.get('/all', modelController.AllModels)
route.get('/prd/:id', modelController.ModelId)

module.exports = route