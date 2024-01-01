const express=require('express')
const path=require('path')
const app=express()


// setup static and middleware
app.use(express.static('./'))

// app.get('/',(req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname,'./index.html'))
// })

app.all('*',(req,res)=>{
    res.status(404).send('Resource not found')
})

app.listen(5000,()=>{
    console.log('Server sleeping on port 5000.....')
})

//5:07