const express = require('express')
const { readFile }= require('fs').promises
const port = 3000

const app = express()

app.get('/', async (req, res)=>{

   res.send(await readFile('./home.html','utf8'))
})

app.listen(port, ()=> console.log(`App is avaiable on http://localhost:3000`))
