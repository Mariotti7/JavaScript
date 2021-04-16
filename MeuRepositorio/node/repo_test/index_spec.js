const express = require('express')
const { readFile } = require('fs').promises

const app = express()
const port = 3000

app.get('/', async (req, res)=>{
    
    res.send( await readFile('./home_spec.html', 'utf8') )
})

app.listen(port, ()=> console.log('Lets getting on! http://localhost:3000'))



