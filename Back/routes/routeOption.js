const express = require('express')
const route = express.Router()
const produitController = require('../controllers/produitController')

route.post('/create', produitController.CreateProduct)
route.put('/update/:id', produitController.UpdateProduct)
route.get('/all', produitController.AllProducts)
route.get('/prd/:id', produitController.ProductId)

module.exports = route