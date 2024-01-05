const Model = require('../models/ModelModel')

exports.CreateModel = async(req,res)=>{
    let model = req.body
    let result = await Model.create(model)
    result.nom = "R1"
    result.save()
    res.status(201).json(result.nom)
}

exports.UpdateModel = async(req, res)=>{
    let idM = parseInt(req.params.id)
    let UpdateModel = req.body
    
    let model = await Model.update({nom: UpdateModel.nom},{
        where: {
            id: idM
        }
    })
    res.status(200).json(model)
}

exports.AllModels= async(req, res)=>{
    const mod = await Model.findAll()
    res.status(200).json(mod)
}

exports.ModelId= async(req, res)=>{
    const mod = await Model.findByPk(parseInt(req.params.id))
    res.status(200).json(mod)
}