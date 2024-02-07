import fs from 'node:fs/promises'; 
//vai pegar o path.json 
const databasePath = new URL("../db.json", import.meta.url); 

export class Database{
    #database = {};
    //vai tentar ler o arquivo db.json, se der erro ele vai criar o db.json vazio 
    constructor(){
        fs.readFile(databasePath, 'utf-8').then(data=>{
            this.#database = JSON.parse(data); 
        }).catch(()=>{
            this.#persist(); 
        })
    }
    //vai escrever no arquivo db.json o que tiver no #database
    #persist(){
        fs.writeFile(databasePath, JSON.stringify(this.#database)); 
    }

    select(table, search){
        let data = this.#database[table] ?? [];
        //se tiver um search, ele vai filtrar todos os dados que tiver search
        if(search){
            data = data.filter(row=>{
                return Object.entries(search).some(([key, value])=>{
                   return row[key].toLowerCase().includes(value.toLowerCase());  
                })
            })
        }
        return data;
    }
    insert(table, data){
        if(Array.isArray(this.#database[table])){
            this.#database[table].push(data); 
        }else{
            this.#database[table] = [data]; 
        }
        this.#persist(); 
        return data; 
    }

    delete(table, id){
        const rowIndex = this.#database[table].findIndex(row=> row.id == id);
        if(rowIndex >-1){
            this.#database[table].splice(rowIndex, 1); 
            this.#persist();

        } 
    }
    //vai atualizar os dados 
    update(table, id, data){
        const rowIndex = this.#database[table].findIndex(row=> row.id == id);
        if(rowIndex >-1){
            this.#database[table][rowIndex] = {id, ...data}; 
            this.#persist();

        } 
    }
}