const Command = require('./models/commandModel')
const Model = require('../models/modeleModel')
const Option = require('./models/optionModel')
const User = require('./models/userModel')
const sequelize = require('../database/database')

exports.createTableCommand= async(req, res)=>{
    await Command.sync()
    res.status(200).json('table command créer')
}
exports.createTableUser= async(req, res)=>{
    await User.sync()
    res.status(200).json('table user créer')
}
exports.createTableModel= async(req, res)=>{
    await Model.sync()
    res.status(200).json('table modele créer')
}
exports.createTableOption = async(req, res)=>{
    await Option.sync()
    res.status(200).json('table option créer')
}

exports.createAllTable = async(req, res)=>{
    await sequelize.sync()
    res.status(200).json('toutes les tables sont créer')
}
