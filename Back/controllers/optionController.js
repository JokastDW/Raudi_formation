const Option = require('../models/optionModel')

exports.CreateOption = async(req,res)=>{
    let option = req.body
    let result = await Option.create(option)
    result.save()
    res.status(201).json(result.nom)
}

exports.UpdateOption = async(req, res)=>{
    let idO = parseInt(req.params.id)
    let UpdateOption = req.body
    
    let option = await Option.update({nom: UpdateOption.nom},{
        where: {
            id: idO
        }
    })
    res.status(200).json(option)
}

exports.AllOptions= async(req, res)=>{
    const op = await Option.findAll()
    res.status(200).json(op)
}

exports.OptionId= async(req, res)=>{
    const op = await Option.findByPk(parseInt(req.params.id))
    res.status(200).json(op)
}