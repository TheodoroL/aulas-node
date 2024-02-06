import http from 'node:http'; 
import { json } from './middlewares/json.js';
import { routes } from './routes.js';


//Query Parameters:URL Stateful => Filtros, paginação, não-obrigatórios
//      eu poderia colocar seguinte: localhost:3333//users?userId=1&name=Daneo
// Route Parameters: identificação de recursos
// Request Body : Envio de informações de um formulário 


const server =  http.createServer(async(req, res)=>{
    const {method, url}= req

   await json(req,res);

    const route = routes.find(route=>{
        return route.method === method && route.path === url;  

    })
    if(route){
        route.handler(req, res); 
    }else{
        return res.writeHead(404).end(); 

    }

})
server.listen(3333)