const express = require('express')
const app = express()
const path = require('path')
const api = require('./server/routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/rentShare', { useNewUrlParser: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })
  
app.use('/', api)




const port = 4000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
