
import http from 'node:http'
import { Transform } from 'node:stream';
class InverseNumberStream extends Transform{
    _transform(chunk, enconde, callback){
        const transformed = Number(chunk.toString())*-1;
        console.log(transformed);         
        callback(null, Buffer.from(String(transformed))); 

    }
}

const server = http.createServer(async(req, res)=>{
    //crio uma lista de buffe
    const buffer = [];
    
    //coleto os "fragmentos" de buffer e coloco na minha lista
    for await(const chunk of req){
        buffer.push(chunk); 
    }
    // vai concatar todos os buffers e transformar ele uma string 
    const fullStreamContent = Buffer.concat(buffer).toString(); 
    console.log(fullStreamContent); 
    //depois mandar isso como resposta
    res.end(fullStreamContent); 
    // return req
    // .pipe(new InverseNumberStream())
    // .pipe(res)
})

server.listen(3334); 