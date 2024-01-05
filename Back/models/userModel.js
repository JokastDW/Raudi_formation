//TODO : Voir pour la validation des données
const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');
const Commande = require('./commandeModel');

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

// User - Commande (Relation OneToMany)
// User peut passer plusieurs Commande (hasMany)
// Une Commande est associée à un user (belongsTo) 
User.hasMany(Commande, {foreignKey:'id_user'})
Commande.belongsTo(User, {foreignKey: 'id_user'})

module.exports = User;
