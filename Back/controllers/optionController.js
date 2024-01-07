const Option = require('../models/optionModel')

exports.CreateOption = async (req, res) => {
    const option = req.body
    const result = await Option.create(option)
    res.status(201).json(result)
}

exports.UpdateOption = async (req, res) => {
    try {
        const idO = req.params.id
        const UpdateOption = req.body

        const option = await Option.update(UpdateOption, {
            where: {
                id: idO,
            },
        })
        res.status(200).json("Mise à jour de l'option effectuée.")
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.AllOptions = async (req, res) => {
    const op = await Option.findAll()
    res.status(200).json(op)
}

exports.OptionId = async (req, res) => {
    const op = await Option.findByPk(req.params.id)
    res.status(200).json(op)
}

exports.DeleteOption = async (req, res) => {
    try {
        const idOption = req.params.id
        const deleteOption = await Option.destroy({
            where: {
                id: idOption,
            },
        })
        res.status(200).json(`Suppression de l'option réalisée.`)
    } catch (error) {
        res.status(500).json(error)
    }
}
