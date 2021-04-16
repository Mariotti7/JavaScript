// Lendo arquivos com promises

const { readFile } = require('fs').promises

async function hello(){
    const file = await readFile('./hello.txt', 'utf-8') // o await resolve a promise
    console.log(file)
}

hello()