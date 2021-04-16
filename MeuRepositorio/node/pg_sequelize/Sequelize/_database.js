const Sequelize = require('sequelize')

const sequelize = new Sequelize({

   host:'localhost',
   database: 'postgres',
   username: 'cliente',
   password: 'cliente',
   dialect: 'postgres',
   port: 5432,
   logging: true
}); 

module.exports = sequelize

// Teste de conexão //

async function teste(){

    try{
        let result = await sequelize.authenticate()
        console.log('Sequelize realizou com sucesso a conexão com o banco teste')
    }
    catch(error){
        console.error("Erro ao conectar no banco")
        console.log(error)
        process.exit()
    }
}

teste()