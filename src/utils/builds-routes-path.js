
//user/:id
export function buildRoutesPath(path){
    const routeParametersRegex = /:([a-zA-Z]+)/g;
    /*para nomear os dados de uma regex. você precisa colocar ?<nome da sua regex>, exemplo: 

    (?<id>[a-z0-9])

    mas se você quiser pegar outros campos, exemplo:
        http://localhost/:id/:teste    
     basta coloca seguinte 
    (?<$1>[a-z0-9])
    
    */
    const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)'); 
    console.log(pathWithParams)
    const pathRegEx = new RegExp(`^${pathWithParams}`)
    
    return pathRegEx; 
}