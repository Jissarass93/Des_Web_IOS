//2) No arquivo main.js crie uma variavel chamada leroLero e atribua o
// texto "Dr Stephen Strange lança um feitiço proibido que abre um
// portal para o multiverso. No entanto, surge uma ameaça que pode
// ser grande demais para sua equipe lidar."
// a) Utilizando o método de acesso as String com aspas acesse a primeira
// posição do índice desse texto e exibe no console.log.
// b) Utilizando a mesma String retorna o tamanho da String no console.log
// utilizando o template String com uma mensagem “O tamanho da String é:
// “.
// 18
// Exercício
// c) Utilizando o método de troca de String substitua o nome "Dr Stephen
// Strange" por "Feiticeira Escarlate"
// d) Utilizando o método de transformar a String em Substring(split),
// transforme a String em substring e exibe no console.log o resultado e
// crie um segundo console.log acessando o índice de posição 13 onde o
// resultado será a palavra "multiverso".
// e) Exibe no console.log a String toda em Maiúsculo.

var leroLero = 'Dr Stephen Strange lança um feitiço proibido que abre um portal para o multiverso. No entanto, surge uma ameaça que pode ser grande demais para sua equipe lidar.'
console.log(leroLero[0]);

var tamanho = (leroLero.length)
console.log(` O resultado da string é : ${tamanho}`)


var trocastring = leroLero.replace('Dr Stephen Strange','Feiticeira Escarlate');
console.log(trocastring);

var separarString = leroLero.split(' ')
console.log(separarString)
console.log('Essa é a string de retorno da posição 13: '+ separarString[13])

console.log(leroLero.toUpperCase())