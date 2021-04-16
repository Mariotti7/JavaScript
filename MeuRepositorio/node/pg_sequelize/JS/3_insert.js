const db = require('./_database')

async function insertData(){
    
    try{
        await db.connect()

        const queryProduto = "INSERT INTO produto (nome) VALUES ($1)"

        await db.query(queryProduto, ['Regata Long Line Masculina - LFM All Black'])
        await db.query(queryProduto, ['Blusa Moleton com Capuz Masculina - LFM Classic Minimalist'])
        await db.query(queryProduto, ['Bermuda Moleton - LFM All Black'])

        const queryCliente = "INSERT INTO cliente (nome) VALUES ($1)"

        await db.query(queryCliente, ['Dwayne Johnson'])
        await db.query(queryCliente, ['Henry Cavill'])
        await db.query(queryCliente, ['Will Smith'])
        await db.query(queryCliente, ['Daniel Craig'])

        const queryCompraProduto = "INSERT INTO compra_produto (produto_id, cliente_id) VALUES($1,$2)"

        await db.query(queryCompraProduto, [1,1])        
        await db.query(queryCompraProduto, [1,2])        
        await db.query(queryCompraProduto, [1,3])        
        await db.query(queryCompraProduto, [2,1])        
        await db.query(queryCompraProduto, [2,2])   

        db.end()

        console.log("Dados Inseridos")

    }
    catch(e){
        console.log(e)
    }
}

insertData()