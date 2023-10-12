const http = require('http')

// CODE-1
// createserver will have two parameters request,response
// const server = http.createServer((req,res)=>{
//     res.write("Hello Welcome to Home page!") // request method write is used
//     // req is an giant object with lots of information
//     console.log(req)
//     res.end() // ending the response
// })
// 5000 is the port which is taken as an example
// server.listen(5000)

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to your Home Page')
    }
    else if(req.url === '/about'){
        res.end("Here is our Short History")
    }
    else{
        res.end(`
        <h1>Opps!</h1>
        <p>We can't seem to find the specified page you are looking for.</p>
    `)
    }
})
server.listen(5000)

// code doesnt exit it keeps on running as it will be connected to browser to recieve requests from user
// web server keep on listening for requests