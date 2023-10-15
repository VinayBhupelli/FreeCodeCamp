// variable is made to a module
const EventEmitter = require('events')
// invoke it 
const customEmitter = new EventEmitter()
// on - listen for an event
// emit - emit an event

customEmitter.on('response',(name,id)=>{
    console.log(`data recieved from user:${name} with id:${id}`)
})
customEmitter.on('response',()=>{
    console.log(`data recieved`)
})
customEmitter.emit('response','vinay','36')

// first on is placed then emit is placed
// keep track of the order
// additional arguments are passed
