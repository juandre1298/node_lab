// this is the way to manage files in a async way with promises
import fs from 'fs/promises';

Promise.all(
    [fs.stat('./random_file.txt'),
    fs.readFile('./random_file.txt', 'utf-8'),
    fs.readFile('./random_file_2.txt', 'utf-8')]    
).then(([stats, text1, text2])=>{
    console.log(
        'isFile: ', stats.isFile(),
        'isDirectory: ', stats.isDirectory(),
        'isSymbolicLink: ', stats.isSymbolicLink(),
        'size: ', stats.size
    )
    console.log('text1', text1)
    console.log('text2', text2)    
})


