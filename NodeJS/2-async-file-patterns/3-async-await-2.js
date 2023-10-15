// WAY - 1
// const {readFile,writeFile} = require('fs')
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async()=>{
//     try{
//         const first = await readFilePromise('./content/first.txt','utf-8')
//         const second = await readFilePromise('./content/second.txt','utf-8')
//         writeFilePromise(
//             './content/result-mind-grenade.txt',
//             `Awesome work: ${first} ${second}`,
//             {flag:'a'}
//         )
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// start()

// WAY - 2
// add promises in the end
const {readFile,writeFile} = require('fs').promises
const start = async()=>{
    try{
        // and use the files directly
        const first = await readFile('./content/first.txt','utf-8')
        const second = await readFile('./content/second.txt','utf-8')
        writeFile(
            './content/result-mind-grenade.txt',
            `Awesome work: ${first} ${second}`,
            {flag:'a'}
        )
    }
    catch(error){
        console.log(error)
    }
}

start()