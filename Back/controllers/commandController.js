const Command = require('../models/commandeModel')

exports.CreateCom = async (req, res) => {
    let command = req.body
    let result = await Command.create(command)
    result.save()
    res.status(201).json(result.nom)
}

exports.UpdateCom = async (req, res) => {
    let idCom = parseInt(req.params.id)
    let UpdateCommand = req.body

    let command = await Command.update(UpdateCommand, {
        where: {
            id: idCom,
        },
    })
    res.status(200).json(command)
}

exports.AllCommands = async (req, res) => {
    const com = await Command.findAll()
    res.status(200).json(com)
}

exports.ComId = async (req, res) => {
    const com = await Command.findByPk(parseInt(req.params.id))
    res.status(200).json(com)
}

exports.DeleteCom = async (req, res) => {
    try {
        const idUser = parseInt(req.params.id)
        const deleteCommand = await Command.destroy({
            where: {
                id: idUser,
            },
        })
        res.status(200).json({msg: 'Suppression de la commande réalisée.'})
    } catch (error) {
        res.status(500).json({err: error})
    }
}
