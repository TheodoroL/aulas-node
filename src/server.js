import http from 'node:http'; 
//lista de usuários
const users = []; 

//primeiro servidor http
const server =  http.createServer(async(req, res)=>{
    const buffer = [];
    for await(const chunk of req){
        buffer.push(chunk); 
    }
    //vai converter o buffer de uma string para um json
    try{

        req.body = JSON.parse(Buffer.concat(buffer).toString()); 
    }catch{
        req.body = null
    }
   
    
    const {method, url}= req
    if(method == "GET" && url =="/users"){
        return res
        //vaicriar um Cabeçalhos 
        .setHeader("Content-type", "application/json")
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