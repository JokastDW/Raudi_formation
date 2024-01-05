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
        allowNull: false,
        validate :{
            isAlpha:{msg : "Votre nom ne doit contenir que des lettres"}
        }
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false,
        validate :{
            isAlpha:{msg : "Votre prénom ne doit contenir que des lettres"}
        }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate:{
            isEmail:{msg:"Merci de saisir un email valide"}
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'user',
        validate :{
            isIn : {args : [['user, comptable, admin']],
            msg : "Choisir un rôle parmi les suivants : user, comptable, admin"}
        }
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
