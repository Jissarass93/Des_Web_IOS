console.log ("reajuste");

var salario = 1000
//localstring
var dinheiro = salario. toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
var percentual = 0.13;
var aumento = salario * percentual;
var real= aumento. toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
var reajuste = salario + aumento;
var valor = reajuste. toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


const hello = `O salário era: ${dinheiro}  ouve um percentual de reajuste no valor de ${real} , e seu valor atual é ${valor}`;
console.log(hello);