const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express() 
app.use(bodyParser.urlencoded({extended:true}))
const PORT = 4000

app.get('/',(req,res) => {
    res.json({
        info:'Node.js Express & Post gres CRUD REST API'
    })
})

app.get('/search',db.getSearch)
app.get('/Branch',db.getBranch)
app.listen(PORT,() => {
    console.log("App is listening on port 4000")
})