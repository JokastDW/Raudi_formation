const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_DTB, process.env.DB_USER, process.env.DB_PW, {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    port: process.env.DB_PORT
})

//Connexion à la BDD
sequelize.authenticate().then(()=>{
    console.log('Connexion à la BDD réussie')
}).catch((err)=>{
    console.error(err);
})

module.exports = sequelize