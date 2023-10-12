// Asyncronous 
const {readFile, writeFile} = require('fs')

// run this to understand CALLBACKS
/*
// readFile('path','encoding-type',callback function)
const first = readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
})
const second = readFile('./content/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
})

console.log(first,second)
*/


// Async using Callbacks
console.log("Started")
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the result: ${first} ${second}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log("Done with the task"); // it will be undefined if result is console.log(result)
        })
    })

})
console.log("Start with next task")