// Exercício 1
// Crie um Array unidimensional com 8 posições contendo os
// seguintes valores "17, 43, 8, 4, 97, 56, 29" em cada posição
// irá conter um valor do tipo number.
// ● utilizando o método forEach crie uma função que receba
// cada posição do array e verifique se o número é par ou
// ímpar e exiba o resultado no console.log
// ● Com o método filter crie uma verificação para retornar
// somente os valores menores ou iguais a 18.

const valores = [17, 43, 8, 4, 97, 56, 29, 60]

// valores.forEach(posicao);

// function posicao(index, item , ) {
//     console.log(`Indice: ${item}`);
//     console.log(`Elemento: ${index}`)
// }

if(valores % 2 === 0) {
    console.log("O número é par");
}