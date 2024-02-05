//Readable Streams /Writable Streams
//----------------------------------
//  - Basicamente vai ler um arquivo aos poucos e escrever no banco de dados esse pouco que eu ele conseguiu lever
//  - Imagina uma importação de um arquivo CSV(Execel) de 1gb e a internet do cliente está 10mb/s 
//      - 1gb => 1.000.000mb 
//      - 10mb/s para ler e escrever no banco de dadosum arquivo de 1gb vai demorar mais ou menos 100s
//      - mas em 10mb/s o back end já leu mais o menos 10k de linhas, então por que não serir essa quantidade ? 
// Esse é o conceito de Streams
