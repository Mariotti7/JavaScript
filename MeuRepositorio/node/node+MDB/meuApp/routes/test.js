var express = require('express')
var router = express.Router()


router.get('/', function(req, res, next){
    res.render('test', { title: 'Node is awesome', numero: Math.floor((Math.random() * 100) - 1)})
})

module.exports = router