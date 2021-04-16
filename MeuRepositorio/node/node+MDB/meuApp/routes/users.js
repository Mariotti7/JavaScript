var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async(req, res, next) => {
  try{
    const docs = await global.db.findAll()
    res.render('users', { title: 'Lista de Clientes ', docs})
  }
  catch(err){
    next(err)
  }
});

module.exports = router;
