//Buffer é uma representação de um espaço na memória do computador, usados especificamente dados de forma rapidamente

const buffer = Buffer.from("hello"); 
//vai mostrar: <Buffer 68 65 6c 6c 6f>(base hexadecimal)
console.log(buffer); 
//se a gente colocar toJson, vai aparecer assim: { type: 'Buffer', data: [ 104, 101, 108, 108, 111 ] } (em base decimal)
console.log(buffer.toJSON())