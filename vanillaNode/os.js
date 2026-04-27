// OS js is a native module that comes with node.js 
// Os let you know info of the machine you are working is like

import os from 'os'

console.log('OS Info:')
console.log('---------------------')

console.log('Name:', os.platform())
console.log('version:', os.release())
console.log('Arquitecture:', os.arch())
console.log('CPUS', os.cpus())
console.log('Free memmory: ', os.freemem()/1024/1024)
console.log('Total memmory: ', os.totalmem()/1024/1024)
console.log('up time (h): ', os.uptime()/60/60)
