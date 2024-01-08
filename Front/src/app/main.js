import '../styles/raudistyle.css'
import api, {getUser} from './apiAxios.js'
const axios = require('axios')

// const liste = await api.getUser()
// console.log('liste', liste.data)
// const table = document.getElementsByTagName('table')
// console.log(table)

// api.getUser().then((json) => {
//     const sibling = document.querySelector('.table')
//     const parentElm = document.createElement('testTable')
//     parentElm.classList.add(['table'])
//     json.forEach((row) => {
//         const rowEl = document.createElement(`${row.id}`)
//         const titleEl = document.createElement('h3')
//         titleEl.innerText = row.nom
//         const descriptionEl = document.createElement('p')
//         descriptionEl.innerText = row.prenom
//         rowEl.appendChild(titleEl)
//         rowEl.appendChild(descriptionEl)
//         parentElm.appendChild(rowEl)
//         sibling.after(parentElm)
//     })
// })

// const test = await api.addUser()
// console.log(test)

getUser = async (contenu) => {
    try {
        const response = await axios.get('http://localhost:8001/user/all')
        console.log(response.data)
        //contenu.textContent = response.data[0].nom
        contenu.innerHTML = `<td>${response.data[0].nom} ${response.data[0].prenom} ${response.data[0].email}</td>`
    } catch (error) {
        console.error(error)
    }
}
let contenu = document.getElementById('data')
getUser(contenu)
