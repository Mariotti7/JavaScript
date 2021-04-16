const Sequelize = require('sequelize')
const sequelize = require('../_database')

const Produto = sequelize.define('produto',{
    nome: {
        type: Sequelize.STRING
    },
    preco:{
        type: Sequelize.FLOAT
    },
});

module.exports = Produto

const Cliente = require('./cliente')
Produto.belongsToMany(Cliente,{ through: 'compra_produto'})