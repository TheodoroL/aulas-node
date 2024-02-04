import http from 'node:http'; 
//lista de usuários
const users = []; 

//primeiro servidor http
const server =  http.createServer((req, res)=>{
    //vai pegar o method e a url 
    const {method, url}= req
    //verificando o method e a url da rota
    if(method == "GET" && url =="/users"){
        return res
        //vaicriar um Cabeçalhos 
        .setHeader("Content-type", "application/json")
        .end(JSON.stringify(users)); 
    }
    if(method == "POST" && url== "/users"){
        users.push({
            nome: "Lucas", 
            email : "teste1234@gmail.com",
        })
        return res.end("Criação de usuários"); 
    }

    //vai escrever ola mundo
    return res.end("hello word"); 
})
//porta do servidor 
server.listen(3333)