const models = require('./models')

async function insert(){
    
   try
   { // Insert do Produto
    const regata = await models.produto.create({nome: 'Regata Long Line Masculina - LFM All Black', preco: 59.99})
    const moleton = await models.produto.create({nome: 'Blusa Moleton Capuz Masculina - LFM Classic Minimalist', preco: 89.90})

    // Insert do Cliente
    const dwayne = await models.cliente.create({nome: 'Dwayne'})
    const henry = await models.cliente.create({nome: 'Henry'})
    const ben = await models.cliente.create({nome: 'Ben'})

    // Insert de quem comprou
    await regata.setClientes([dwayne, henry, ben])
    await moleton.setClientes([dwayne, henry])

    await models.sequelize.close()

    console.log('Dados Inseridos!')
    }
    catch(e){
        console.log(e)
    }
}
insert()