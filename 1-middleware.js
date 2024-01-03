const express=require('express')
const app=express()
const logger=require('./logger')
const authorise=require('./authorise')
const morgan=require('morgan')

// app.use(logger)
// app.use('/api',logger)
// app.use([logger,authorise])
// app.use([authorise,logger])

app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.send('Home Page')
})

// app.use(logger)

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.get('/api/products',(req,res)=>{
    res.send('Products')
}) 

app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.send('Items')
})

app.listen(5000,()=>{
    console.log('Server is sleeping on 5000....')
})

// 6:21