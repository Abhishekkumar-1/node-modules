const express=require('express')
const app=express()

const url='about'

app.get('/',(req,res)=>{
    res.status(200).send('Hello Exress')
})

app.get(`/${url}`,(req,res)=>{
    res.status(200).send('About Page')
})

app.all('*',(req,res)=>{
    res.status(400).send('<h1>Cannot find this page</h1>')
})

app.listen(5000,()=>{
    console.log('Server is listening on 5000')
})