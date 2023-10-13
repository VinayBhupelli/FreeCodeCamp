const http = require('http')
const server = http.createServer((req,res)=>{
    console.log("request recieved")
    res.end('Hello World')
})
server.listen(5000,()=>{
    console.log("Server listening on 5000 port")
})

// both are asynchronous 