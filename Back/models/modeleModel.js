//TODO : Voir pour la validation des données
const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');
const Option = require('./optionModel');
const Commande = require('./commandeModel');
// importez les models avec qui lié :
// const Produit = require('./produitModel')

const Modele = sequelize.define('modele', {
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
    //TODO : type - diesel, essence, electrique, hybride
    moteur: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    nb_portes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nb_places: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    //TODO : type - citadine, monospace, berline, SUV, 4x4
    taille: {
        type: DataTypes.STRING,
        allowNull: false,
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
