const express=require('express')
const app=express()

const {products}=require('./data')

app.get('/author',(req,res)=>{
    res.json([
        {uid:'20BCS9801',name:'Abhishek kumar',age:19},
        {uid:'NA',name:'NA',age:21}
    ])
})

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products/allproducts',(req,res)=>{
    const newProducts=products.map((product)=>{
        const {id,name,image}=product
        return {id,name,image}
    })

    res.json(newProducts)
})

app.get('/api/products/:productID',(req,res)=>{
    // console.log(req.params)
    const {productID}=req.params
    if(isNaN(productID)){
        return res.send('<h3>Product id is should be integer</h3>')
    }
    const singleProduct=products.find((product)=>product.id===Number(productID))
    
    if(!singleProduct){
        return res.status(404).send('<h3>Not found product</h3>')
    }
    
    return res.json(singleProduct)
    
})

app.listen(5000,()=>{
    console.log('Server is listening  on 5000...')
})

// 5:50