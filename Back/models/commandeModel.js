const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');

const Commande = sequelize.define('commande', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },

    id_user: {
        type: DataTypes.UUID,
        allowNull: false
    },
    finalisee: {
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

module.exports = Commande;
