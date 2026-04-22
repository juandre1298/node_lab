// this is the way to manage files in a sync way
import fs from 'fs'

const stats = fs.statSync('./random_file.txt')
// get file data
console.log(
    'isFile: ', stats.isFile(),
    'isDirectory: ', stats.isDirectory(),
    'isSymbolicLink: ', stats.isSymbolicLink(),
    'size: ', stats.size
)


console.log('reading the first file...')
const text = fs.readFileSync('./random_file.txt', 'utf-8')

console.log(text)

console.log('reading the second file...')
const text2 = fs.readFileSync('./random_file_2.txt', 'utf-8')

console.log(text2)

