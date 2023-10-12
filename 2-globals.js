// In node there is no Window because there is no browser
// the app will crash if you try to access it

// global variables are accessed any where in the application even nested also

// __dirname - path to the directory
// __filename - filename
// require - function to use modules (CommonJS)
// module - Info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname)
setInterval(()=>{
    console.log("Vinay!")
},1000)

// press up in terminal to get the previous command