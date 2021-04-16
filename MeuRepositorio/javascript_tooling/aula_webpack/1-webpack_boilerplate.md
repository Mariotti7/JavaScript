# Webpack - Boilerplate

## O que é Webpack? https://webpack.js.org/

-> É um empacotador de módulo JavaScript de código aberto. Ele é feito principalmente para JavaScript, mas pode transformar ativos de front-end, como HTML, CSS e imagens, se os carregadores correspondentes forem incluídos. Webpack pega módulos com dependências e gera ativos estáticos que representam esses módulos.

## O que é Boilerplate?

-> Código boilerplate ou boilerplate se refere a seções de código que devem ser incluídas em muitos lugares com pouca ou nenhuma alteração. 

#### Iniciar o npm

    npm init -y

#### Instalando Devdependências

-> Babel + Webpack:

    npm install --save-dev @babel/cli @babel/preset-env @babel/cor babel-loader webpack webpack-cli 

#### Instalando dependências

    npm i core-js regenerator-runtime

#### Criando um arquivo Webpack

-> Crie um arquivo: webpack.config.js
-> Importar um path para trabalhar com caminhos: 

    const path = require('path') // Estilo de importação CommonJS

-> Configurando o modulo de exportação do webpack file para gerar o bundle:

    module.exports = {
     mode: 'development', 
     entry:'./src/index.js',
     output:{ 
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
     },
         module:{
          rules:[{
            exclude: /node_modules/,
            test: /\.js$/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets:['@babel/env']
                } 
            }
        }]
      },
         devtool: 'source-map'
    }

-> path.resolve serve para resolver o caminho das pastas não precisando de ponto ou barras, gerando o arquivo bundle;
-> module > rules: é um conjunto de regras, você pode utilizar para configurar as regras. Colocando o exclude você diz para o webpack nao ler o que está nele (tudo dentro de expressão regular);
-> module > test: é onde o bundle será formado e dentro dele você colocar os arquivos que vão formar o bundle (tudo dentro de expressão regular);
-> module > use > loader: é o que o webpack vai usar, no caso o babel-loader
-> module > use > options > presets: conjunto compartilhável de plug-ins e / ou configurações do Babel options
-> devtools: 'source-map' > mapeia o erro caso aconteça

#### Criando algumas pastas e arquivos

-> Crie uma pasta src;
-> Dentro da pasta src > crie um aquivo index.js
-> Crie uma pasta public;
-> Dentro de public > crie uma pasta assets > dentro de assets uma outra pasta js
-> Dentro da pasta js > será criado o bundle

#### Testando o Webpack

-> Abra o package.json e dentro de script > crie um script para executar:

    "script":{
        "loader": "webpack -w"
    }

-> "loader" -> Pode ser qualquer nome
-> "webpack -w" -> execute o webpack e assista ele (-w)

#### Executando o script:

    npm run loader

-> Roder o nome do script
