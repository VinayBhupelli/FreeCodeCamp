// fs-file system
// fileModule can be syncronous(blocking) and Asyncronous(non-blocking)(better one)

// syncronous 
const {readFileSync, writeFileSync} = require('fs')

// readFileSync('path','encoding-type')
console.log("started")
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

// console.log(first,second)

// writeFileSync('path',"content")
// if present present overwrites it if not it creates the file
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first} ${second}`,
    {flag:'a'} // this appends the content to the existing content
)
console.log("finished")
