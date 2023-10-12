Install Node from Their Official Website
then run "node --version" in terminal it should give you version

normally HTML CSS JS code file are read by browser but now for using node:
Node to Run the code we use REPL(Read Evaluate Print Loop) & CLI
know the differnce between REPL & CLI

In terminal type "node" to enter into REPL
write any js code and run
to exit press ctrl+C


In node there is no Window because there is no browser
the app will crash if you try to access it

global variables are accessed any where in the application even nested also

__dirname - path to the directory
__filename - filename
require - function to use modules (CommonJS)
module - Info about current module (file)
process - info about env where the program is being executed

Node uses CommonJS library, every file is module (by default)
Modules - Encapsulated Code

console.log(module) 
exports is an object 

built in modules:
OS, PATH, FS, HTTP

callbacks are returned at the end of the runtime

http module: helps us to set up a web server
creating your own server and setting up api

npm -Node package Manager
helps to get code written by others 
which is error less code 

while installing node we get npm also
npm - global command, comes with node
npm --version  (or) npm --v

Inorder to install packages we need to use the below commands
local dependency - use it only in this particular project
npm i <packageName>

global dependency - use it in any project
npm install -g <packageName>   =>windows
sudo npm install -g <packageName>   =>mac

Learn about npx (less need for setting up globally when we use npx)

package.json - manifest file (stores important info about project/package)
Three ways to create package.json file:
1. manual approach (create package.json in the root, create properties etc)
2. npm init (step by step, press enter to skip)
3. npm init -y (everything default) 

there will be no dependencies in this at the starting of creation of package.json 
this dependencies when installed create a folder called node_modules
which contains dependency related files

example:
npm i lodash => create only one dependencies folder
npm i bootstrap => create more than one dependencies folder
(one dependency might use other dependencies)

this npm used to install external node packages

// Adding Files to Git without node_modules folder as it is large size

first create .gitignore
then type "/node_modules" in line 1

then type "git init" in terminal
then "git add ."
then "git commit -m "first commit""
then run this 3 commands to push an existing repo from command line
"git remote add origin git@${github repo link}
 git branch -M main 
 git push -u origin main"

in order to clone the git link
git clone git@${repo link}
as there as dependencies(node_modules) folder
we just need to type "npm install"