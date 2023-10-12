const path = require('path')

console.log(path.sep)

const filePath = path.join('./content','subfolder','text.txt')
console.log(filePath)

// give the last file/folder in the filePath
const basename = path.basename(filePath)
console.log(basename)

console.log(__dirname)
// to join the path to make it absolute
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)