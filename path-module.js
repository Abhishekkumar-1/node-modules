const path=require('path')
console.log(path.sep)

console.log(path.join('/folder0','subfolder0','text.txt'))

const filePath=path.join('/folder0','subfolder0','text1.txt')
console.log(filePath)

const base=path.basename(filePath)
console.log(base)

const absolute=path.resolve(__dirname,'/folder0','subfolder0','text.txt')
console.log(absolute)
