//Readable Streams /Writable Streams
//----------------------------------
//  - Basicamente vai ler um arquivo aos poucos e escrever no banco de dados esse pouco que eu ele conseguiu lever
//  - Imagina uma importação de um arquivo CSV(Execel) de 1gb e a internet do cliente está 10mb/s 
//      - 1gb => 1.000.000mb 
//      - 10mb/s para ler e escrever no banco de dadosum arquivo de 1gb vai demorar mais ou menos 100s
//      - mas em 10mb/s o back end já leu mais o menos 10k de linhas, então por que não serir essa quantidade ? 
// Esse é o conceito de Streams


//Criando a Stream de leitura


// process.stdin
// .pipe(process.stdout) // tudo que eu estou recebendo como entrada, estou caminhando(com o pipe) para saida

import {Readable, Writable, Transform}from'stream'; 

//Stream de Leitura
class OneToHundredStream extends Readable{
    index = 1;
    _read(){
        const i = this.index++; 
        
        // if(i > 100){
        //     this.push(null); 
        // }else{
        //     // vai converter para buffer
        //     const buffer = Buffer.from(String(i))
        //     this.push(buffer); 
        // }
        
        // cada 1s vai adicionar mais um dado
        setTimeout(()=>{
        if(i > 100){
            this.push(null); 
        }
        else{
            // vai converter para buffer
            const buffer = Buffer.from(String(i))
            this.push(buffer); 
        }
        },1000)
        
    }
}
//Stream Transformação de dados
class InverseNumberStream extends Transform{
    _transform(chunk, enconde, callback){
        const transformed = Number(chunk.toString())*-1;
        
        //callback(o erro, e os dados convertido) obs: quando for colocar null na parte do erro, você está dizendo que não avera nenhum erro
        callback(null, Buffer.from(String(transformed))); 

    }
}
//Stream de Escrita
class MultplyByTenStream extends Writable{
    /* 
        -chunk : é o pedaço que nós leu do Readable
        - enconde: é como esse dado está codificado 
        - callback: é uma função de stream de escrita terminou o que ele precisava 
    */
    _write(chunk, enconde, callback){
        console.log(Number(chunk.toString())*10); 
        callback(); 
    }
}
//estou lendo um dado 
new OneToHundredStream()
//estou transformando um número positivo para negativo
.pipe(new InverseNumberStream())
// estou escrevendo dados
.pipe(new MultplyByTenStream())