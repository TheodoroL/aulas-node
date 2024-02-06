
export class Database{
    //variavel privado 
    #database = {};
    // vai mostrar data do "banco de dados"    
    select(table){
        // se existir essa tabela, ele vai mostrar, se não vai mandar uma array vazia
        const data = this.#database[table] ?? []; 
        return data;  
    }
    insert(table, data){
        //vai veficar existe uma tabela com esse nome, se existir vai adicionar o data
        if(Array.isArray(this.#database[table])){
            this.#database[table].push(data); 
        }else{
            //se não vai criar essa tabela com o data 
            this.#database[table] = [data]; 
        }
        return data; 
    }
}