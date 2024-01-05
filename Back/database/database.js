const Sequelize = require('sequelize')

const sequelize = new Sequelize('ipssi-s04_projet-raudi', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
})

//Connexion à la BDD
sequelize.authenticate().then(()=>{
    console.log('Connexion à la BDD réussie')
}).catch((err)=>{
    console.error(err);
})

module.exports = sequelize