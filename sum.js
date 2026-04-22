// this uses the module design pathern. That it's just separate the code in deferent files so we can reuse. 
// export is the way Edma Script mdules does the export and import. 
export function sum (a, b){
    return a + b
}

// models in node can be done in two different ways, one is "common js", it's the classic and wrong way to do it. This way is deprecated 
// common-js
// module.exports = sum // module is a global variable that tells what are you exporting.
// if most be called a require in the other code so you can import them.
