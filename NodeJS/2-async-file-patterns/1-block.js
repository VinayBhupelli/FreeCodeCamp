const http = require('http')

const server = http.createServer((req,res)=>{
    // its a callback function
    if(req.url==='/'){
        res.end('Home Page')
    }
    if(req.url==='/about'){
        // It is synchronous code   
        // BLOCKING CODE
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page')
    }
})
const port = 5000
server.listen(port,()=>{
    console.log("server started at "+`localhost:${port}/`)
})