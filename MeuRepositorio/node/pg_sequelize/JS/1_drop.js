const db = require('./_database')

async function dropTables(){
try{
  await db.connect()
  await db.query(`DROP TABLE produto CASCADE`)
  await db.query(`DROP TABLE cliente CASCADE`)
  await db.query(`DROP TABLE compra_produto CASCADE`)
  await db.end()

   console.log("Tabelas removidas");
}
catch(e){
    console.log(e)
}
}

dropTables()
