Instalador do scaffold do express (com templates)

    npm install -g express-generator

Utilizando linguagem de marcação HTML

    express -e nome_arquivo

Com um npm start você roda a app na porta 3000

View -> o arquivo "HTML" no qual você pode usar tag server <%=%> para interpolar propriedades do arquivo .js que está na pasta Routes;  

        <!DOCTYPE html>
        <html>
          <head>
            <title><%= title %></title>
            <link rel='stylesheet' href='/stylesheets/style.css' />
          </head>
          <body>
            <h1><%= title %></h1>
            <p>Welcome, <%= nome %>!</p>
          </body>
        </html>


Routes -> Pasta aonde ficam os arquivos .js de rota da sua aplicação

    var express = require('express');
    var router = express.Router();

    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('index', { title: 'Node is cool', nome: 'Leandro' });
    });

    module.exports = router;

app.js -> é o arquivo da aplicação, o arquivo principal que mostra as informações da aplicação
Se você tiver utilizado o express-generator, ele já vem configurado, se precisar criar novas pastas e arquivos, saiba que preciará importar a rota e colocar o método use
Exemplos:

    var indexRouter = require('./routes/index');

    app.use('/test', testRouter)


### Metodo get

-> Recebendo dados do servidor
-> Dentro do res.render temos o 'index'(que é a extensão da view), seguido das propriedades da model { title e nome}

    /* GET home page. */
        router.get('/', function(req, res, next) {
          res.render('index', { title: 'Node is cool', nome: 'Leandro' });
        });

### Metodo post

-> Enviando dados para o servidor:

     router.post('/', function(req, res, next){

     })