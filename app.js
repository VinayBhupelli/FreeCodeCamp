// using different pages at a time to render
const http = require('http')
const { readFileSync } = require('fs')

const homeHTML = readFileSync('./ExpressJS/navbar-app/index.html')
const homeCSS = readFileSync('./ExpressJS/navbar-app/styles.css')
const homeLOGO = readFileSync('./ExpressJS/navbar-app/logo.svg')
const homeLOGIC = readFileSync('./ExpressJS/navbar-app/browser-app.js')

const server = http.createServer((req,res)=>{
    const url = req.url
    if(url ===  '/'){
        res.writeHead(200,{'content-type':'text/html'}) 
        res.write(homeHTML)
        res.end()
    }
    else if(url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/html'})
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
