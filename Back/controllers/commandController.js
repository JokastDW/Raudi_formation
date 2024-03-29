const Command = require('../models/commandeModel')

exports.CreateCom = async (req, res) => {
    let command = req.body
    let result = await Command.create(command)
    result.save()
    res.status(201).json(result.nom)
}

exports.UpdateCom = async (req, res) => {
    let idCom = req.params.id
    let UpdateCommand = req.body

    let command = await Command.update(UpdateCommand, {
        where: {
            id: idCom,
        },
    })
    res.status(200).json(command)
}

exports.AllCommands = async (req, res) => {
    const com = await Command.findAll()
    res.status(200).json(com)
}

exports.Historic = async (req, res) => {
    try {
      // Utilisez la méthode findAll avec une clause where pour filtrer les commandes
      const trueCommands = await Command.findAll({
        where: {
          finalisee: true, // Remplacez 'booleanField' par le nom réel de votre champ booléen
        },
      });
  
      // Renvoyez les commandes filtrées en tant que réponse JSON
      res.status(200).json(trueCommands);
    } catch (error) {
      console.error('Erreur lors de la récupération des commandes :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des commandes.' });
    }
  };

  
exports.SortByMonths = async (req, res) => {
    try {
      // Utilisez la méthode findAll avec une clause group pour regrouper par date de création
      const groupedCommands = await Command.findAll({
        attributes: [
          'createdAt',
          [sequelize.fn('COUNT', sequelize.col('*')), 'commandCount'],
        ],
        where: {
          booleanField: true, // Remplacez 'booleanField' par le nom réel de votre champ booléen
        },
        group: ['createdAt'],
        order: [['createdAt', 'DESC']], // Optionnel : tri par date de création décroissante
      });
  
      // Renvoyez les commandes regroupées en tant que réponse JSON
      res.status(200).json(groupedCommands);
    } catch (error) {
      console.error('Erreur lors de la récupération des commandes groupées :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des commandes groupées.' });
    }
  };

exports.ComId = async (req, res) => {
    const com = await Command.findByPk(req.params.id)
    res.status(200).json(com)
}

exports.DeleteCom = async (req, res) => {
    try {
        const idCom = req.params.id
        const deleteCommand = await Command.destroy({
            where: {
                id: idCom,
            },
        })
        res.status(200).json('Suppression de la commande réalisée.')
    } catch (error) {
        res.status(500).json(error)
    }
}
