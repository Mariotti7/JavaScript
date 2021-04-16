const db = require('./_database')

async function deleteData(){

    try{
        await db.connect()

        // Deletando Produto

        const deleteProduct = "DELETE FROM produto WHERE id=$1"
        await db.query(deleteProduct,[3])

        // Deletando Cliente

        const deleteClient = "DELETE FROM cliente WHERE id=$1"
        await db.query(deleteClient,[4])

        await db.end()

        console.log("Dados Deletados")
    }
    catch(e){
        console.log(e)
    }
}

deleteData()