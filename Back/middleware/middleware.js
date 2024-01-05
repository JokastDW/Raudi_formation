const jwt = require('jsonwebtoken')
const db = require('../database/database')

require('dotenv').config()

exports.authenticator = async (req, res, next) =>{
    try {
    const token = req.params.token ? req.params.token : req.headers.authorization
    if(token && process.env.SECRET_KEY){
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
            if(err){
                throw new Error("accès refusé")
            }
            else{
                next()
            }
        })
    }else{
            throw new Error("accès refusé")
    } }
    catch (error){
        res.status(401).json({erreur: error})
    }
}

exports.isAdminOrComptable = async (req, res, next) =>{
    try {
    const token = req.params.token ? req.params.token : req.headers.authorization
    if(token && process.env.SECRET_KEY){
        jwt.verify(token, process.env.SECRET_KEY, async (err, decoded)=>{
            if(err){
                throw new Error("accès refusé")
            }
            else{
                const result = await db.query(`SELECT role FROM user where email='${decoded.email}'`)
                if(result.length === 1 && (result[0].role === "admin" ||result[0].role === "comptable")){
                    next()
                }
                else{
                throw new Error("accès refusé")
                }
            }
        })
    }else{
                throw new Error("accès refusé")
    }
    } catch (error) {
        res.status(401).json({erreur : error})

    }
    
}

exports.isAdmin = async (req, res, next) =>{
    try {
    const token = req.params.token ? req.params.token : req.headers.authorization
    if(token && process.env.SECRET_KEY){
        jwt.verify(token, process.env.SECRET_KEY, async (err, decoded)=>{
            if(err){
                throw new Error("accès refusé")
            }
            else{
                const result = await db.query(`SELECT role FROM user where email='${decoded.email}'`)
                if(result.length === 1 && result[0].role === "admin"){
                    next()
                }
                else{
                throw new Error("accès refusé")
                }
            }
        })
    }else{
                throw new Error("accès refusé")
    }
    } catch (error) {
        res.status(401).json({erreur : error})

    } 
}