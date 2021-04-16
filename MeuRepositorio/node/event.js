// Emitindo um evento em node.js

const { EventEmitter } = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('lunch', ()=>{
    
    console.log('Time to eat!')
})

eventEmitter.emit('lunch')