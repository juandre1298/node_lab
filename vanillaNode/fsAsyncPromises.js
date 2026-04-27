// this is the way to manage files in a async way with promises
import fs from 'fs/promises';
import {promisify} from 'util';

fs.stat('./random_file.txt').then(( stats) =>{

    console.log(
    'isFile: ', stats.isFile(),
    'isDirectory: ', stats.isDirectory(),
    'isSymbolicLink: ', stats.isSymbolicLink(),
    'size: ', stats.size
    )
})
// get file data

console.log('reading the first file...')
fs.readFile('./random_file.txt', 'utf-8').then( (text)=>{
    console.log(text)
})
// this is a way to transform a function into a promise
const readFilePromisify = promisify(fs.readFile)

console.log('reading the second file...')
readFilePromisify('./random_file_2.txt', 'utf-8').then((text)=>{
    console.log(text)
})

const text = await fs.readFile('./random_file_2.txt', 'utf-8');
console.log('text from await', text); // en Emodule se puede hacer await sin el async, pero en common js no se puede, this is because a top level await
// if you are using comming js you cannoty use await, you will need to use a IIFE (Inmediatly invoked function expression")
;(async ()=>{
    const text = await fs.readFile('./random_file_2.txt', 'utf-8');
    console.log('text from await IIFE', text);
})()