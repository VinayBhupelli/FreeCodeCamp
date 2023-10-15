// When you run this the server keeps on loading
// const http = require('http')
// http.createServer((req,res)=>{
//     console.log("hello world")
// }).listen(5000)

// Using writeHead instead of end
// const http = require('http')
// http.createServer((req,res)=>{
//     // statusCode & Header
//     console.log(req.method)
//     res.writeHead(200,{'content-type':'text/html'})
//     // res.end('<h1>Hello World</h1>')
//     res.write('<h1>Hello World</h1>') 
//     res.end()
// }).listen(5000)

// using different pages at a time to render
const http = require('http')
const server = http.createServer((req,res)=>{
    const url = req.url
    if(url ===  '/'){
        res.writeHead(200,{'content-type':'text/html'}) 
        res.write('<h1>Hello World</h1>')
        res.end()
    }
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h4>Page Not Found</h4>')
        res.end()
    }
})
server.listen(5000)
