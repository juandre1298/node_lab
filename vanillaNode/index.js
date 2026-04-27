console.log('hola mundo')
console.info('hola mundo')
console.error('hola mundo')
// window doesnt exist in node
// console.log(window) ---> error, it can only be used in the browser.
/console.log(global)//  ---> this is a global variable that can only be used in node. Like the windows node equivalente.
// instead use globalThis --> is a global variable that we can access from browser and node.  
console.log(globalThis)
// all global global method come from globalThis
globalThis.console.log('console.log from globalThis')

// import using common js
// const sum = require('./sum')
// console.log(sum)
// Here's how you use the Escript module (.mjs)
import { sum } from './sum.js';
console.log(sum(1,2));