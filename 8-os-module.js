// Built-in Modules
const os = require('os')
// know methods and properties by typing "os."

// info about current use
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime} seconds`)

const currOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currOS)