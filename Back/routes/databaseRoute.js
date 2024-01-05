const express = require('express')
const route = express.Router()
const databaseController = require('../controllers/databaseController')

route.get('/createAllTable', databaseController.createAllTable)

module.exports = route