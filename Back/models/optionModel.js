const sequelize = require('../database/database')
const {DataTypes} = require('sequelize')

const Option = sequelize.define(
    'option',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: {
                    msg: 'Votre nom ne doit contenir que des lettres ou des chiffres',
                },
            },
        },
        description: {
            type: DataTypes.TEXT,
            unique: true,
            allowNull: false,
        },
        prix: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
    }
)

module.exports = Option
