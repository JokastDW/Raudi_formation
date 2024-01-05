const bcrypt = require('bcrypt');
const User = require('../models/userModel')

exports.CreateUser = async (req, res) => {
    try {
        const { nom, prenom, email, password, role } = req.body;

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Cet e-mail est déjà utilisé.' });
        }

        // Hachage du mot de passe avec bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Créer l'utilisateur dans la base de données
        const newUser = await User.create({
            nom,
            prenom,
            email,
            password: hashedPassword,
            role
        });

        // Ne renvoyer que les informations nécessaires (sans le mot de passe)
        const userResponse = {
            id: newUser.id,
            nom: newUser.nom,
            prenom: newUser.prenom,
            email: newUser.email,
            role: newUser.role
        };

        return res.status(201).json(userResponse);
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur :', error);
        return res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur.' });
    }
}

exports.UpdateUser = async(req, res)=>{
    let idUser = parseInt(req.params.id)
    let UpdateUser = req.body
    
    let User = await User.update({nom: UpdateUser.nom},{
        where: {
            id: idUser
        }
    })
    res.status(200).json(User)
}

exports.AllUsers= async(req, res)=>{
    const users = await User.findAll()
    res.status(200).json(users)
}

exports.UserId= async(req, res)=>{
    const users = await User.findByPk(parseInt(req.params.id))
    res.status(200).json(users)
}

exports.Login = async (req, res) =>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
          return res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
        }
  
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
        }
  
        const token = jwt.sign({ userId: user.id }, 'votre_clé_secrète', { expiresIn: '1h' });
  
        res.json({ token });
      } catch (error) {
        console.error('Erreur lors de la connexion de l\'utilisateur :', error);
        res.status(500).json({ error: 'Erreur lors de la connexion de l\'utilisateur.' });
      }
}