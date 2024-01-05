//TODO : Voir pour la validation des données
const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');
// importez les models avec qui lié :
// const Produit = require('./produitModel')

const User = sequelize.define('user', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'user'
    }
}, {
    sequelize,
    freezeTableName: true
  });

//RELATION ICI:
// Etagere.hasMany(Produit, { foreignKey: 'etagereId'})
// Produit.belongsTo(Etagere, { foreignKey: 'etagereId'})

module.exports = User;
