//TODO : Voir pour la validation des données
const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');
// importez les models avec qui lié :
// const Produit = require('./produitModel')

const Commande = sequelize.define('commande', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

    //TODO : Ajouter foreign Key
    id_user: {
        type: DataTypes.UUID,
        allowNull: false
    },
    //TODO : Ajouter foreign Key
    id_modele: {
        type: DataTypes.UUID,
        unique: true,
        allowNull: false
    },
    //TODO : A valider avec l'équipe
    realisee: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    freezeTableName: true
  });

//RELATION ICI:
// Etagere.hasMany(Produit, { foreignKey: 'etagereId'})
// Produit.belongsTo(Etagere, { foreignKey: 'etagereId'})

module.exports = Commande;
