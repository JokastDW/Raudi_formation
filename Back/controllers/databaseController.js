const Command = require('../models/commandeModel')
const Model = require('../models/modeleModel')
const Option = require('../models/optionModel')
const User = require('../models/userModel')
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
    const modele = await initiateModels()
    if(modele){
        res.status(200).json({warning : "Tables créées, mais erreur à l'ajout des modèles de base."})
    } else {
    res.status(200).json('toutes les tables sont créer')
    }
}

initiateModels = async()=>{
try{
    const [resultR1, createdR1] = await Model.findOrCreate({
    where: { nom: 'R1' },
    defaults: {nom:'R1' , moteur: 'diesel', nb_portes: 3, nb_places: 5, taille:'citadine', prix:15000}
    });
    const [resultR2, createdR2] = await Model.findOrCreate({
    where: { nom: 'R2' },
    defaults: {nom:'R2' , moteur: 'essence', nb_portes: 5, nb_places: 5, taille:'berline', prix:20000}
    });
    const [resultFamille, createdFamille] = await Model.findOrCreate({
    where: { nom: 'Famille' },
    defaults: {nom:'Famille' , moteur: 'essence', nb_portes: 5, nb_places: 7, taille:'monospace', prix:30000}
    });
} catch (error){
    return new Error('Erreur à la création des modèles.')
}
}
