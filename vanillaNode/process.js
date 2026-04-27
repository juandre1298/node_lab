import process from "node:process";

// this prints the arguments in the terminal, the first and second position of the array is the node path and the file path
console.log(process.argv) // example: node process.js some_other_stuff_you_wanna_add

// get current working directory

console.log(process.cwd())

// variables de entorno

console.log(process.env.EXAMPLE_ENV)

