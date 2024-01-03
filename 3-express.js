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

app.get('/api/products',(req,res)=>{
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

app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query)
    const {search,limit}=req.query
    let sortedProducts=[...products]
    if(search && limit){
        sortedProducts.sort(function(product1,product2){
            return product2.id-product1.id;
        })
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }else{
        return res.send('hello world');
    }
    return res.status(200).json(sortedProducts)
})

app.listen(5000,()=>{
    console.log('Server is listening  on 5000...')
})

// 5:50