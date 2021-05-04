// sample with path module

const path = require('path')

// separator 
console.log('separator: ', path.sep)

// join method 
const filePath = path.join('/folder', 'subfolder', 'test.txt')
console.log('file path: ', filePath)

// getting base name of a given file path
const baseName = path.basename(filePath)
console.log('base name: ', baseName)

// getting absolute path
const absolutePath = path.resolve(__dirname, 'folder', 'subfolder', 'test.txt')
console.log('absolute path: ', absolutePath)
