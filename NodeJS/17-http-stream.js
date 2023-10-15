const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    // const result = fs.readFileSync('./content/very-big.txt','utf-8')
    // res.end(result)

    // Sending data Chunks here
    const fileStream = fs.createReadStream('./content/very-big.txt','utf-8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        console.log(err)
    })
}).listen(5000)