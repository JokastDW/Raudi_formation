const express = require('express')
const cors = require ('cors')

const databaseRoute = require('./routes/databaseRoute')
const commandRoute = require('./routes/routeCommand')
const modelRoute = require('./routes/routeModel')
const optionRoute = require('./routes/routeOption')
const userRoute = require('./routes/routeUser.js')
const app = express()

app.use(express.json())
app.use(cors())

app.use('/database', databaseRoute)
app.use('/command', commandRoute)
app.use('/model',modelRoute)
app.use('/option',optionRoute)
app.use('/user',userRoute)


app.listen(8001, ()=>{
    console.log("serveur lancé sur le port 8001");
})


