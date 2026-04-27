import fs from 'node:fs';
// fs is for file system. And readdir read the directory. 
// this is the async callback way

const folder = process.argv[2] ?? '.'

fs.readdir(folder, (err, files)=>{
    if(err){
        console.error('Error al leer el directorio: ', err)
        return;
    }
    files.forEach( file => {
        console.log( file)
    })
})


