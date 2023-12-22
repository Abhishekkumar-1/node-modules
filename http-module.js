const http=require('http')

const server=http.createServer((req,res)=>{
    console.log(req)
    if(req.url==='/'){
        res.end('We are at home page')
    }
    else if(req.url==='/about'){
        res.end('We are at about page')
    }
    else{res.end(`
    <h1>Oops!</h1>
    <p> We are at the wrong page </p>
    <a href="/">back Home</a>
    `)}
})

server.listen(5000)