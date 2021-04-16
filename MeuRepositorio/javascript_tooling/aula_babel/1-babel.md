# Babel

## O que é? https://babeljs.io/

-> O Babel é um transpilador de código, ele converte códigos com sintaxe moderna e transforma em scripts antigos para que navegadores antigos possam suportar.

## Como instalar?

-> Primeiro instale o pacote de node_modules:

    npm init -y

-> Instale o babel:

    npm install --save-dev @babel/cli @babel/preset-env @babel/core

## Como criar um arquivo transpilado?

-> Crie um arquivo main.js e insira um script qualquer;
-> Ao executar o Babel ira transpilar para um script mais antigo:

    npx babel main.js -o bundle.js --presets=@babel/env

-> Será criado um arquivo bundle.js com o código transpilado

### Utilizando o script Bundle numa página HTML

-> Crie um arquivo em HTML e dentro do body importe bundle.js file

    <script src="./bundle.js"></script>

### Como utilizar o script do Bundle de maneira automática?

-> Abra o package.json:
-> Dentro de "scripts" crie um novo paramentro:
    
    "babel_converter": "babel ./main.js -o ./bundle.js --presets=@babel/env -w"

## Como executar o Babel?

    npm run babel_converter