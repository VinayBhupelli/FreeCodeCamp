// Modules
// the idea of modules is that writing the "node 3-modules.js" code can divided into separate files
// like small example is that writing different functions or added separe files(importing) to this file while running

const names = require("./4-names")
const sayHi = require("./5-utils")
const data = require("./6-alternative-flavor")
require("./7-mind-grenade")

// console.log(names)
console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
