const {writeFileSync}=require('fs')

for(let i=1;i<=10000;i++){
    writeFileSync('./folder0/big.txt',`Hello World ${i}\n`, {flag:'a'})
}