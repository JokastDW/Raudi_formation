# Raudi_formation
Projet en collaboration avec Steven BRAVO 

Front 
Accès invité
Page d’accueil (Route « /accueil ») > Liste des modèles proposés
Page détails modèle (Attention modification des options impossible)
Connecté en tant que comptable
Page historique des achats
Page compte rendu gain total par mois
Connecté en tant que client
Fonctionnalités supplémentaires

Back
GET AllModeles 
GET ModeleByID (voir Sequelize)
BDD  Rôle « comptable »
GET HistoriqueAchats
GET CompteRendu
Connecté en tant que client
Modification des voitures possible
Prix variable selon l’option sélectionnée
Connecté en tant qu’administrateur
Accès page Administration
Création d’un modèle de voiture
Connecté en tant que comptable
Accès Page comptabilité

BACK
Rôle utilisateur connecté
POST Voiture

*****BDD******
user => { 
    nom
    prenom
    email
    mdp
    role
}

modele => {
    nom
    nb_porte
    moteur
    nb_place 
    taille
}

option => 