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
            const users = database.select("users"); 
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
    }
]