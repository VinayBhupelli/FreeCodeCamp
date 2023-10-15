const http = require('http')

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subscribe to it / Listen to it / respond to it
server.on('request',(req,res)=>{
    res.end("Hello World")
})
server.listen(5000)