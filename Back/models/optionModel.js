//TODO : Voir pour la validation des données
const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');

const Option = sequelize.define('option', {
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
    description: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false
    },
    prix: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    sequelize,
    freezeTableName: true
  });

module.exports = Option;
