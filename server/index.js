require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const connectionString= process.env.DB_CONNECTION_STRING;

const app = express()
app.use(bodyParser.json())

const port = 3232

massive(connectionString).then(connection =>{
    app.set('db', connection)
    app.listen(port, ()=> {console.log(`Magic is happenin on port ${port}`)})
})
    