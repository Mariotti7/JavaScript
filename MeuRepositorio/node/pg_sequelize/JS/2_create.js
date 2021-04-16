const db = require('./_database')

async function createTables(){
    try {
    await db.connect()

    await db.query(`CREATE TABLE produto(
        id serial PRIMARY KEY,
        nome VARCHAR (250) UNIQUE NOT NULL
    )`)

    await db.query(`CREATE TABLE cliente(
        id serial PRIMARY KEY,
        NOME VARCHAR (250) UNIQUE NOT NULL
    )`)

    await db.query(`CREATE TABLE compra_produto(
        produto_id integer NOT NULL,
        cliente_id integer NOT NULL,
        PRIMARY KEY (produto_id,cliente_id),
        FOREIGN KEY (produto_id) REFERENCES produto (id),
        FOREIGN KEY (cliente_id) REFERENCES cliente (id)
    )`)
    
    await db.end()

    console.log("Tabelas criadas")
}
catch(e){
    console.log(e)
}
}

createTables()

