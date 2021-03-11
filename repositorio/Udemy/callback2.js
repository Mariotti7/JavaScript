
import { readFile } from 'fs' // import do proprio node para leitura de arquivo

const file = readFile('./Udemy/human.txt', {encoding: 'utf-8'}, (err, data)=>{
    console.log('CALLBACK ', new Error(err))
    console.log('CALLBACK DATA', data)
})

console.log('file', file)

