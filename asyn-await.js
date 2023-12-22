const {readFile, writeFile} =require('fs')
const util=require('util')
const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)
const str="Hello my new friend!!"

// we can remove line no. 2,3,4 and in line 1 we can add require('fs').promises()
// and in line 29,30 we can replace readFilePromise to readFile and writeFilePromisePromise to writeFile


const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                return err
            }
            else{
                resolve(data)
            }
        })
    })
}


const start=async()=>{
    try{
        const first=await getText('./folder0/first.txt')
        const second=await getText('./folder0/second.txt')
        const third=await readFilePromise('./folder0/third.txt','utf8')
        await writeFilePromise('./folder0/fifth.txt',str)
        console.log(first)
        console.log(second)
        console.log(third)
    }
    catch(error){
        console.log(error)
    }
}

start()

// getText('./folder0/first.txt')
//     .then(result=>console.log(result))
//     .catch((err)=>console.log(err))