const db = require('./_database')

async function updateData(){

    try{

        await db.connect()

        // Atualizando Produtos

        const updatingProduct = ("UPDATE produto SET nome=$1 WHERE id=$2");
        await db.query(updatingProduct,['Blusa Moleton Masculina com Capuz - LFM Classic Minimalist', 2])

        // Atualizando Clientes
        
        const updatingClient = ("UPDATE cliente SET nome=$1 WHERE id=$2")
        await db.query(updatingClient, ['Brad Pitt', 3])

        await db.end()

        console.log("Atualizações concluídas")

    }
    catch(e){
        console.log(e)
    }
}

updateData()