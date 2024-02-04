import http from 'node:http'; 
//primeiro servidor http
const server =  http.createServer((req, res)=>{
    //vai pegar o method e a url 
    const {method, url}= req
    //verificando o method e a url da rota
    if(method == "GET" && url =="/users"){
        return res.end("lista de usuários"); 
    }
    if(method == "POST" && url== "/users"){
        return res.end("Criação de usuários"); 
    }

    //vai escrever ola mundo
    return res.end("hello word"); 
})
//porta do servidor 
server.listen(3333)