import { Database } from './database.js';
import {randomUUID} from 'node:crypto'; 
import { buildRoutesPath } from './utils/builds-routes-path.js';

const database = new Database(); 
//rotas criadas
export const routes = [
    {
        method: "GET", 
        path:buildRoutesPath( "/users"), 
        handler: (req, res)=>{

            const {search} = req.query; 

            console.log(search)
            //se tiver um search, ele vai dar um objeto com o nome e emeail como search, senão vai retornar null
            const users = database.select("users",search?{
                nome: search, 
                email:search
            }:null); 
            return res
            .end(JSON.stringify(users)); 
        }
    },
    {
        method: "POST", 
        path:buildRoutesPath( "/users"), 
        handler: (req, res)=>{
         
        const {nome, email} = req.body; 
        const users={
            id : randomUUID(), 
            nome, 
            email
        }

        database.insert('users', users); 
        return res.writeHead(201).end("usuario criado com sucesso"); 
        }
    },
    {
        method: "DELETE", 
        path: buildRoutesPath("/users/:id"), 
        handler:(req, res)=>{
            const {id} = req.params; 
            database.delete('users', id); 
            res.writeHead(204).end();    
        }
    },
    {
        method: "PUT", 
        path: buildRoutesPath("/users/:id"), 
        handler:(req, res)=>{
            const {id} = req.params; 
            const {name, email} = req.body;
            database.update('users', id, {name, email}); 
            res.writeHead(204).end();    
        }
    }
]