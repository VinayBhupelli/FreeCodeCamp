// using different pages at a time to render
const http = require('http')
const { readFileSync } = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const homecss = readFileSync('./navbar-app/styles.css')

const server = http.createServer((req,res)=>{
    const url = req.url
    console.log(url)
    if(url ===  '/'){
        res.writeHead(200,{'content-type':'text/html'}) 
        res.write(homepage)
        res.end()
    }
    else if(url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeCSS)
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h4>Page Not Found</h4>')
        res.end()
    }
})
server.listen(5000)
