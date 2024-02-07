//search?=Lucas
export function extracQueryParams(query){
    // vai separar os querys
    return query.substr(1).split('&').reduce((queryParams, params)=>{
        // vai separar entre o query e valor, exemplo {search:lucas}
        const [key, value] = params.split('='); 
        queryParams[key] = value; 
        return queryParams; 
    }, {}); 
}