import http from "node:http";

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res)=>{
    console.log('request received', req.url)
    res.setHeader('content-type', 'text/html; charset=utf-8')

    if( req.url === '/'){
        res.statusCode = 200
        res.end('<h1>Main page</h1>')
    }else if( req.url === '/contact'){
        res.setHeader('content-type', 'text/html; charset=utf-8')
        res.end('<h1>Contact page</h1>')
    }
    else{
        res.statusCode = 404
        res.setHeader('content-type', 'text/html; charset=utf-8')
        res.end('<h1>Page not found</h1>')
    }
})

server.listen(desiredPort, ()=>{
    console.log(`server listeinign on port http://localhost:${desiredPort}`)
})