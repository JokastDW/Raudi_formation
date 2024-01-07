const Model = require('../models/modeleModel')

exports.CreateModel = async (req, res) => {
    const modele = req.body
    const result = await Model.create(modele)
    res.status(201).json(result)
}

exports.UpdateModel = async (req, res) => {
    try {
        let idM = req.params.id
        let UpdateModel = req.body

        let model = await Model.update(UpdateModel, {
            where: {
                id: idM,
            },
        })
        res.status(200).json('Modèle mis à jour.')
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.AllModels = async (req, res) => {
    const mod = await Model.findAll()
    res.status(200).json(mod)
}

exports.ModelId = async (req, res) => {
    const mod = await Model.findByPk(req.params.id)
    res.status(200).json(mod)
}

exports.DeleteModel = async (req, res) => {
    try {
        const idModel = req.params.id
        const deleteModel = await Model.destroy({
            where: {
                id: idModel,
            },
        })
        res.status(200).json('Suppression du modèle réalisé.')
    } catch (error) {
        res.status(500).json(error)
    }
}
