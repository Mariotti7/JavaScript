const db = require('./_database')

async function selectData(){
    try{

        await db.connect()

        let querySelect

        // Select Produto

        querySelect = await db.query("SELECT * FROM produto")
        console.log("Produto: ")
        console.log(querySelect.rows)

        // Select Cliente

        querySelect = await db.query("SELECT * FROM cliente")
        console.log("Cliente: ")
        console.log(querySelect.rows)

        // Select Compra de Produto

        querySelect = await db.query("SELECT p.nome AS produto, c.nome AS cliente FROM produto AS p, cliente AS c, compra_produto AS cp WHERE cp.produto_id = p.id AND cp.cliente_id = c.id")
        console.log("Compras realizadas: ")
        console.log(querySelect.rows)

        await db.end()

        console.log('Pesquisa concluída')

    }
    catch(e){
        console.log(e)
    }
}

selectData()