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
    role = comptable, admin, user
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
    finalisee
    total
}

# TODO (Steven)
*Intégrer la validation des données pour les modèles ? 
https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/#validators

*Relations à valider
>User - Commande
User peut passer plusieurs Commande (hasMany) foreign key >
Une Commande est associée à un user (belongsTo) foreign key >

>Modèle - Options
Un modèle peut avoir plusieurs Options (belongsToMany) through
Une option peut etre assosiée à plusieurs Modèles (belongsToMany) through

>Modèle - Commande
Une commande peut contenir plusieurs Modèles (belongsToMany) through
Un Modèle peut etre dans plusieurs Commandes (belongsToMany) through

*Table Commande
Définir les foreignkey
https://sequelize.org/docs/v6/other-topics/legacy/#foreign-keys
