//trabalhando com strings
//concatenar
let exemplo1 = 10;
let exemplo2 = 2;
let string1 = 'Aqui vai um texto'

//quando tem uma variavel com 1(+) ele vai concatenar e se for separtados por 2(+) ele soma 
//concatenação com aspas (' ')simples
console.log('O resultado da soma é : ' + (exemplo1 + exemplo2))

console.log("O resultado da soma é : " + (exemplo1 + exemplo2))//concatenação com aspas duplas""

console.log(`O resultado da some é : ${exemplo1 + exemplo2}`)//concatenação com crase´´

// METODOS DE STRING
// Acessa uma string 
let string2 = 'Aqui vai um texto'
console.log(string2.charAt(0))
console.log(string2[1])

// Tamanho da string
// length é um atributo que mostra quantos caracteres tem no texto
let string3 = 'Aqui vai um texto';
console.log(string3.length)

// Maiusculas e Minúsculas 
let string4 = 'Aqui vai um texto';
console.log(string4.toUpperCase()) //maiusculo
console.log(string4.toLowerCase()) //minúsculo

// Substring e Slipt
let string5 = 'Mozilla';
console.log(string5.substring(1,3));
//Slipt
let string6 = 'A raposa é um animal esperto';
let string7 = string6.split(' ');
console.log(string7[5]);
console.log(string7); //indefinido separa todos

// Substituir uma string dentro da string (replace)
let string8 = 'Aqui vai um texto';
let string9 = string8.replace('Aqui','Kauan');
console.log(string9);

// Remover espaços (trim)
let string10 = '    Aqui vai um texto ' ;
console.log(string10);
console.log(string10.trim());

// Métodos de buscar em strings
let string11 = 'Aqui vai um texto Aqui'
console.log(string11[18])

//string.indexOf(): 
console.log(string11.indexOf('Aqui'))

//string.lastIndexOf():
console.log(string11.lastIndexOf('Aqui'))

//string.search(): busca um valor específico e retorna a posição inicial 
console.log(string11.search('Aqui'))

//string.startsWith(): verifica se a string inicia com um valor específico
console.log(string11.startsWith('A'))

//String.endsWith():método verifica se a string termina com um valor específico.
console.log(string11.endsWith('.'))
console.log(string11.endsWith('i'))
console.log(string11.endsWith('I'))




