// Modulo para ler arquivos

const { readFile, readFileSync } = require('fs')

// Lendo um arquivo de 2 maneiras

const txt = readFileSync('./hello.txt', 'utf-8') // Primeiro sera lido esse

const md = readFile("./hello.txt", 'utf-8', (err, md)=>{ // Terceiro a ser lido
    console.log(md) 
})

console.log(txt)

console.log('whatever dude') // Segundo a ser lido