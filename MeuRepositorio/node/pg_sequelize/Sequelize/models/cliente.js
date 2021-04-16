const Sequelize = require('sequelize')
const sequelize = require('../_database')

const Cliente = sequelize.define('cliente',{
   nome: {
       type: Sequelize.STRING
   },
});

module.exports = Cliente

const Produto = require('./produto')
Cliente.belongsToMany(Produto,{ through: 'compra_produto' })