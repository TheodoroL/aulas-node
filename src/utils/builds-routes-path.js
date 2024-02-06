
//user/:id
export function buildRoutesPath(path){
    // Regex é uma expressão regular
    // O que é uma expressão regular ? basicamente é uma forma de encontrar textos segue um formato especifico 
    const routeParametersRegex = /:([a-zA-Z]+)/g; //cria uma RegExd de forma global do A até Z do  maiusculo para minusculo depois dos dois pontos, exemplo:(:id)
    console.log(Array.from(path.matchAll(routeParametersRegex))); 
}