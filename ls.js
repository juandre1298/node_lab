import fs from 'node:fs';
// fs is for file system. And readdir read the directory. 
// this is the async callback way
fs.readdir('.', (err, files)=>{
    if(err){
        console.error('Error al leer el directorio: ', err)
        return;
    }
    files.forEach( file => {
        console.log( file)
    })
})

// the promise way
import fsP from 'node:fs/promises';
fsP.readdir('.').then((files)=>{
  files.forEach(file=>{
    console.log(file)
  })}).catch((error)=>{
    console.error(error)
})

