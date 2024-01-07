const bcrypt = require('bcrypt')
const User = require('../models/userModel')

exports.CreateUser = async (req, res) => {
    try {
        const {nom, prenom, email, password, role} = req.body

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({where: {email}})
        if (existingUser) {
            return res.status(400).json('Cet e-mail est déjà utilisé.')
        }

        // Hachage du mot de passe avec bcrypt
        const hashedPassword = await bcrypt.hash(password, 10)

        // Créer l'utilisateur dans la base de données
        const newUser = await User.create({
            nom,
            prenom,
            email,
            password: hashedPassword,
            role,
        })

        // Ne renvoyer que les informations nécessaires (sans le mot de passe)
        const userResponse = {
            id: newUser.id,
            nom: newUser.nom,
            prenom: newUser.prenom,
            email: newUser.email,
            role: newUser.role,
        }

        res.status(201).json(userResponse)
    } catch (error) {
        res.status(500).json("Erreur lors de la création de l'utilisateur.")
    }
}

exports.UpdateUser = async (req, res) => {
    let idUser = parseInt(req.params.id)
    let UpdateUser = req.body

    if (req.body.password) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        UpdateUser.password = hashedPassword
    }

    let update = await User.update(UpdateUser, {
        where: {
            id: idUser,
        },
    })
    if (update) {
        res.status(200).json('Mise à jour réalisée.')
    } else {
        res.status(500).json('Erreur lors de la mise à jour.')
    }
}

exports.AllUsers = async (req, res) => {
    const users = await User.findAll()
    res.status(200).json(users)
}

exports.UserId = async (req, res) => {
    const users = await User.findByPk(req.params.id)
    res.status(200).json(users)
}

exports.Login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return res
                .status(401)
                .json({error: 'Email ou mot de passe incorrect.'})
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res
                .status(401)
                .json({error: 'Email ou mot de passe incorrect.'})
        }

        const token = jwt.sign({userId: user.id}, process.env.SECREY_KEY, {
            expiresIn: '1h',
        })

        res.json({token})
    } catch (error) {
        console.error("Erreur lors de la connexion de l'utilisateur :", error)
        res.status(500).json({
            error: "Erreur lors de la connexion de l'utilisateur.",
        })
    }
}

exports.DeleteUser = async (req, res) => {
    try {
        const idUser = parseInt(req.params.id)
        const deleteUser = await User.destroy({
            where: {
                id: idUser,
            },
        })
        res.status(200).json("Suppression de l'utilisateur réalisée.")
    } catch (error) {
        res.status(500).json(error)
    }
}
