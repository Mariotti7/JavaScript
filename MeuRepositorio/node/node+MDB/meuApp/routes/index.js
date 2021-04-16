var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node is cool', nome: 'Leandro' });
});

router.get('/', async(req, res, next) => {
  try{
    const docs = await global.db.findAll()
    res.render('users', { titulo: 'Lista de Clientes ', docs})
  }
  catch(err){
    next(err)
  }
});

module.exports = router;
