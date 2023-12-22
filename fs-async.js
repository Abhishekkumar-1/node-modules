const {readFile,writeFile}=require('fs')

console.log('Starting the task')

readFile('./folder0/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result
    console.log(first)
    console.log('Starting the 1st reading task')

    readFile('./folder0/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
    const second=result
    console.log(second)
    console.log('Starting the 2nd reading task')

    writeFile(
        './folder0/fourth.txt',
        `Hello this is third text: ${first}, ${second}`,{flag:'a'},
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
        const fourthText=result
        console.log(fourthText)
        console.log('Starting the writting task')
        }
    )
    })
})

console.log('Starting the next task')
