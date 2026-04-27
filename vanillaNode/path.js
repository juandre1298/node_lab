import path from "node:path";

// it's recommended NOT to hardcode the routes or path
// The issue is that windows OS uses \ and linux, mac OS uses /.
console.log('current path of OS: ', path.sep)
// Solution:
const filePath = path.join('/content','subfolder','actual_file.txt')
console.log(filePath)

// get the file name
const testPath = '/tmp/subfolder/file_name.txt'
const base = path.basename(testPath)
console.log(base)
const fileName = path.basename(testPath, '.txt')
console.log(fileName)
const extname = path.extname(testPath)
console.log(extname)
