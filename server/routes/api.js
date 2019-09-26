const express = require( 'express' )
const router = express.Router()
const request = require('request-promise')
const User = require('../models/User')
const Trans = require('../models/Transaction')


//adding a User//
router.post('/user', function(req, res){
    let userName = req.body
    User.findOne({name: userName.name}).exec(function(err, user){
        if(user){
            res.send(user)
        }
        else{
            let newUser = new User(userName)
            newUser.save().then(function(newUser){
                res.send(newUser)
            })
        }
    })
})

//getting all users
router.get('/users', function (req, res) {
    User.find({}).populate("transactions").exec(function(err, users) {
        // console.log(users)
        res.send(users)
    })
})

//getting one user
router.get('/user/:name', function (req, res) {
    let userName = req.params
    User.findOne({name: userName.name}).populate("transactions").exec(function(err, user) {
        // console.log(user)
        res.send(user)
    })
})

//adding a transaction//
router.post('/newUserTrans/:name', async (req, res) => {
    let name = req.params.name
    let transaction = new Trans(req.body)
    transaction.save()
    User.findOne({ name }).exec((err,user) => {
        user.transactions.push(transaction)
        user.save()
        res.end() 
    })
})

//getting all transactions
router.get('/transactions', function(req,res){
    Trans.find({}).exec(function(err,trans){
        console.log(trans)
        res.send(trans)
    })
})

//delete transaction
router.delete('/transaction', function(req,res){
    let id = req.body._id
    Trans.findOneAndRemove({_id:id}).exec(function(err,trans){
        res.end()
    })
}) 

//delete all transactions
router.delete('/transactions', function(req,res){
    console.log("f")
    Trans.find({}).remove({}).exec(function(err,trans){
        res.end()
    })
})


module.exports = router
