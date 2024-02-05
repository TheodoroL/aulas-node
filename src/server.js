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
        // vai enviar que o status é 201, obs : nós retorna sempre quando algo é criado na aplicação do back end
        return res.writeHead(201).end(); 
    }

    //se não existir rotas criada, vai retonar 404
    return res.writeHead(404).end(); 
})
//porta do servidor 
server.listen(3333)