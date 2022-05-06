// > Exercício 4
// Escreva um algoritmo para ler uma temperatura em graus Fahrenheit,
// calcular e escrever o valor correspondente em graus Celsius (baseado
// na fórmula abaixo):
//      C          F - 32
//  ---------- = -----------
//      5            9
// (32 °f -32) x 5/9 =0°C    ***F PARA C
//(0 °C x 9/5) + 32= 32

var F = 212
var C = 100
var T = 5/9
C = (F - 32) * T

console.log(`O calculo de fahenrheit para celsiu é : ${C}`)