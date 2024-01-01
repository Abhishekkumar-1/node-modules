const http=require('http')
const {readFileSync, read}=require('fs')

const portNumber=5000

const data=readFileSync('./index.html')
const styledata=readFileSync('./style.css')
const logodata=readFileSync('./logo.svg')
const logicdata=readFileSync('./browser-app.js')

const server=http.createServer((req,res)=>{

    const url=req.url

    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        // res.end('<h3>Hello to port</h3> '+portNumber)
        // res.end()
    }else if(url==='/style.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(styledata)
        // res.end()
    }else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(logodata) 
        // res.end()
    }else if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(logicdata) 
        // res.end()
    }
    else{
        res.writeHead(400,{'content-type':'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
    res.end()
})

server.listen(portNumber)