const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');
const Option = require('./optionModel');
const Commande = require('./commandeModel');

const Modele = sequelize.define('modele', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
        unique : true,
        validate :{
            isAlphanumeric:{msg : "Votre nom ne doit contenir que des lettres ou chiffres"}
        }
    },
    moteur: {
        type: DataTypes.STRING,
        allowNull: false,
        validate :{
            isIn : {args : [['diesel', 'essence', 'electrique', 'hybride']],
            msg : "Le type de moteur doit être l'un des suivants : diesel, essence, electrique, hybride"}
        }
    },
    nb_portes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nb_places: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    taille: {
        type: DataTypes.STRING,
        allowNull: false,
        validate :{
            isIn : {args : [['citadine', 'monospace', 'berline', 'SUV', '4x4']],
            msg : "La taille doit être l'une des suivants : citadine, monospace, berline, SUV, 4x4"}
        }
    },
    prix: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    sequelize,
    freezeTableName: true
  });


// Modèle - Options (Relation ManyToMany)
// Un modèle peut avoir plusieurs Options (belongsToMany) 
// Une option peut etre assosiée à plusieurs Modèles (belongsToMany) 
Modele.belongsToMany(Option,{through : 'ModeleOptions'})
Option.belongsToMany(Modele,{through : 'ModeleOptions'})

// Modèle - Commande (Relation ManyToMany)
// Une commande peut contenir plusieurs Modèles (belongsToMany) 
// Un Modèle peut etre dans plusieurs Commandes (belongsToMany)
Modele.belongsToMany(Commande,{through : 'CommandeModeles'})
Commande.belongsToMany(Modele,{through : 'CommandeModeles'})

module.exports = Modele;
