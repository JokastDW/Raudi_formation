const axios = require('axios')

//Utilisateur
exports.getUser = async () => {
    try {
        const response = await axios.get('http://localhost:8001/user/all')
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}

//TODO récupérer les données du formulaire
exports.addUser = async () => {
    try {
        response = axios.post('http://localhost:8001/user/create', {
            //TODO récupérer les données du formulaire
        })
    } catch (error) {
        console.error(error)
    }
}
