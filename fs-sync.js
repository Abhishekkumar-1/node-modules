const {readFileSync,writeFileSync} =require('fs')

const first=readFileSync('./folder0/first.txt','utf8')
const second=readFileSync('./folder0/second.txt','utf8')

console.log(first)
console.log(second)

console.log('Starting the task')

writeFileSync('./folder0/third.txt',
`Hello this is third text: ${first}, ${second}`,
{flag:'a'}, // flag is for concatinating previous data in file with new
// else all the previous data will be overwritten by new data
console.log('Starting the task1')
)

writeFileSync('./folder0/third.js',
`const name0= 'Hello this is third text: ${first}, ${second}'`,
 // flag is for concatinating previous data in file with new
// else all the previous data will be overwritten by new data
console.log('Starting the task2')
)

console.log('Starting the next task')
