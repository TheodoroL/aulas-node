
//user/:id
export function buildRoutesPath(path){
    const routeParametersRegex = /:([a-zA-Z]+)/g;
    const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)'); 
    console.log(pathWithParams)
    const pathRegEx = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`);
    
    return pathRegEx; 
}