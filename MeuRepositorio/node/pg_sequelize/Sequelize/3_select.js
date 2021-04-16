const models = require('./models')

async function select(){

    console.log("\n")

    try
    {
        // Produtos
        const produtos = await models.produto.findAll()
        produtos.forEach(produto => {
            console.log(`Produto: ${produto.nome} | Preço: ${produto.preco}`)
        });

        console.log("\n")

        // Clientes
        const clientes = await models.cliente.findAll()
        clientes.forEach(cliente =>{
            console.log(`Cliente: ${cliente.nome}`)
        })

        console.log("\n")
        
        // Clientes que compraram
        const compraProdutos = await models.produto.findAll({
            include:[ 
                {
                    model: models.cliente
                }]
        })
        compraProdutos.forEach((produto) =>{
            console.log(`Produto: ${produto.nome} | Preço: ${produto.preco}`)
            produto.clientes.forEach((cliente)=>{
                console.log('--------------> Cliente: ', cliente.nome)
            })
        })
        console.log("\n")

        await models.sequelize.close()
    }
    catch(e){
        console.log(e)
    }
}
select()