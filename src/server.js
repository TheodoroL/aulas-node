import http from 'node:http'; 
import { json } from './middlewares/json.js';
//lista de usuários
const users = []; 

//primeiro servidor http
const server =  http.createServer(async(req, res)=>{
    const {method, url}= req

   await json(req,res);

    if(method == "GET" && url =="/users"){
        return res
        //vaicriar um Cabeçalhos 
        .end(JSON.stringify(users)); 
    }
    if(method == "POST" && url== "/users"){

        const {nome, email} = req.body; 
        users.push({
            nome, 
            email
        })
        // vai enviar que o status é 201, obs : nós retorna sempre quando algo é criado na aplicação do back end
        return res.writeHead(201).end("usuario criado com sucesso"); 
    }

    //se não existir rotas criada, vai retonar 404
    return res.writeHead(404).end(); 
})
//porta do servidor 
server.listen(3333)