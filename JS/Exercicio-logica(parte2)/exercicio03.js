var custo = 3000;
var porcentagem = 0.28;
var imposto = 0.45;


var valor = custo * (porcentagem + imposto)

var valorTotal = custo + valor

console.log(`${valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)