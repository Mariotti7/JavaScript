# MongoDB

## Abrindo o Mongo

-> Digite no terminal dentro da pasta data:

    mongo

## Usando o projeto

-> Digite no terminal e em seguida será mudado para db meuApp:

    use meuApp

## Inserindo dados

-> Digite no terminal db + nome da collection(algo parecido com uma coluna) + insert + dados dentro de chaves, uma vez que virarão dados json:

    db.customers.insert({nome: "Dwayne Johnson", email: "dj@sevenbucks.com"})

-> Para ver se o registro foi parar no banco realmente, digite:

    db.customers.find().pretty()

## Conectando o MongoDB com Node

    npm install mongodb

-> Primeiramente, para organizar nosso acesso à dados, vamos criar um novo arquivo chamado db.js na raiz da nossa aplicação Express (meuApp). Esse arquivo será o responsável pela conexão e manipulação do nosso banco de dados, usando o driver nativo do MongoDB. Adicione estas linhas:

    const mongoClient = require("mongodb").MongoClient;
    mongoClient.connect("mongodb://localhost", { useUnifiedTopology: true })
                .then(conn => global.conn = conn.db("meuApp"))
                .catch(err => console.log(err))

    module.exports = { }

-> Agora abra o arquivo www que fica na pasta bin do seu projeto Node e adicione a seguinte linha no início dele:

    global.db = require('../db');

-> Para conseguirmos fazer uma listagem de clientes, o primeiro passo é ter uma função que retorne todos os clientes em nosso módulo db.js (arquivos JS que criamos são chamados de módulos se possuírem um module.exports no final), assim, adicione a seguinte função ao seu db.js (substituindo aquela linha do module.exports que tinha antes):

    function findAll() {
        return global.conn.collection("customers").find().toArray();
    }

    module.exports = { findAll }
