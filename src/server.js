import http from 'node:http'; 
//primeiro servidor http
const server =  http.createServer((req, res)=>{
    //vai escrever ola mundo
    return res.end("hello wo12231r2d")
})
//porta do servidor 
server.listen(3333)