// O middleware como um interceptador,
//que recebe a requisição que lida com essa requisição da melhor forma para a aplicação.
export async function json(req, res){
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
    res.setHeader("Content-type", "application/json")

   
}