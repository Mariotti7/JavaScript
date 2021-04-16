const sequelize = require('../_database')

const models ={
    produto: require('./produto'),
    cliente: require('./cliente'),
    sequelize: sequelize
}

module.exports = models