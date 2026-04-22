// this is the way to manage files in a async way
import fs from 'fs'

fs.stat('./random_file.txt', (err, stats) =>{
    if(err){
        console.error(err)
        return;
    }
    console.log(
    'isFile: ', stats.isFile(),
    'isDirectory: ', stats.isDirectory(),
    'isSymbolicLink: ', stats.isSymbolicLink(),
    'size: ', stats.size
    )
})
// get file data

console.log('reading the first file...')
fs.readFile('./random_file.txt', 'utf-8', (err, text)=>{
    if(err){
        console.error(err)
        return;
    }
    console.log(text)
})

console.log('reading the second file...')
fs.readFile('./random_file_2.txt', 'utf-8', (err, text)=>{
    if(err){
        console.error(err)
        return;
    }
    console.log(text)
})
