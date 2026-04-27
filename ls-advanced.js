import fs from 'node:fs/promises';
import path from "node:path";
// fs is for file system. And readdir read the directory. 
// this is the async callback way

const folder = process.argv[2] ?? '.'


const ls = async (folder) => {
    let files
    try{
        files = await fs.readdir(folder)
    }catch(err){
        console.error('Error when reaading the directory: ', err)
        process.exit(1)
    }
    const filesPromises = files.map( async file => {
        const filePath = path.join(folder,file)
        let stats
        try{
            stats = await fs.stat(filePath)
            return {
                name: file,
                size_mb: stats.size/1024,
                type: stats.isDirectory() ? 'dir' : 'file',
                lastModificationTime: stats.mtime
            }
        }catch(err){
            console.error(`can't get ${filePath} stats: ${err}`)
        }      
        return;
    })
    Promise.all(filesPromises).then(ans => console.log(ans))
}

ls(folder)

