# Raudi_formation
Projet en collaboration avec Steven BRAVO et Beni MAMBI-GUÉRIN

**Front Fonctionalité**
Pages

Accès invité
Page d’accueil (Route « /accueil ») > Liste des modèles proposés
Page détails modèle (Attention modification des options impossible)
Connecté en tant que comptable
Page historique des achats
Page compte rendu gain total par mois
Connecté en tant que client
Fonctionnalités supplémentaires

**Back Fonctionalité**
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
    mdp = hash
    role = comptable, role_admin, role_user
}

modele => {
    nom
    nb_porte
    moteur
    nb_place 
    taille
    prix
}

option => {
    nom
    description
    prix
}

commande => {
    id_user
    id_modele
    acheté
    total
}

# TODO (Steven)
*Intégrer la validation des données pour les modèles ? 
https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/#validators

*Relations à valider
>User - Commande
User peut passer plusieurs Commande
Une Commande est associée à un user

>Modèle -Options
Un modèle peut avoir plusieurs Options
Une option peut etre assosiée à plusieurs Modèles

>Commande-Modèle
Une commande peut contenir plusieurs Modèles
Un Modèle peut etre dans plusieurs Commandes

>User - Modele
User peut avoir plusieurs modèles
Un Modèle peut être lié à plusieurs Users
Est-ce qu'il est nécessaire de faire cette relation  sachant qu'il y a 
User - Commande et Commande - Modèle ?

*Table Commande
Définir les foreignkey
https://sequelize.org/docs/v6/other-topics/legacy/#foreign-keys
