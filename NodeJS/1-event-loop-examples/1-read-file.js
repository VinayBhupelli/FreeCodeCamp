const {readFile} = require('fs')
console.log("Started a first task")
// asynchronous is getting offloaded
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
    console.log("Done with the code")
})
console.log("starting the next task")