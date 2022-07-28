const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//on- listen for an event
//emit-emit the event 

customEmitter.on('response', () =>{
    console.log(`Data received`)
})

customEmitter.emit('response')