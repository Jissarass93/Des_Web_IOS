// Criar um array de colaboradores da empresa, com pelo
// menos 5 pessoas, informando Nome, Salário e vínculo
// (CLT/PJ) e efetuar o cálculo do valor de INSS de cada
// colaborador com base na tabela do ano atual.
// OBS: é necessário ter funcionários nos dois regimes,
// utilizar if/else para verificar o regime e um if encadeado
// ou switch/case para verificar as demais condições, no final
// exibir o nome de cada colaborador com sua contribuição,
// para o regime PJ exibir o valor zerado.

let colaborador1 = {
    firstName: 'Maria',
    Salário: 1212.00,
    Vínculo: 'CLT'
}
let colaborador2 = {
    firstName: 'Pedro',
    Salário: 3825.00,
    Vínculo: 'CLT'
}
let colaborador3 = {
    firstName: 'Ricardo',
    Salário: 2225.00,
    Vínculo: 'CLT'
}
let colaborador4 = {
    firstName: 'Alice',
    Salário: 4635.00,
    Vínculo: 'pj'
}
let colaborador5 = {
    firstName: 'Antonio',
    Salário: 5612.00,
    Vínculo: 'CLT'
}

const inss1 = colaborador1.Salário * (7.5/100)
//  console.log(inss1)

if (inss1 > 0 && inss1 < 0 || inss1 > 1) {
	console.log("CLT")
}else if (inss1 <= 0) {
    console.log("PJ");
}

console.log(`Funcinário(a): ${colaborador1.firstName}, sua contricuição no inss é:
 ${inss1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} no regime CLT`) 



const inss2 = colaborador2.Salário * (14/100)
// //  console.log(inss2)
if (inss2 > 0 && inss2 < 0 || inss2 > 1) {
	console.log("CLT")
}else if (inss1 <= 0) {
    console.log("PJ");
}

console.log(`Funcinário(a): ${colaborador2.firstName}, sua contricuição no inss é: 
 ${inss2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} no regime CLT`)

const inss3 = colaborador3.Salário * (9/100)
// //  console.log(inss3)
if (inss3 > 0 && inss3 < 0 || inss3 > 1) {
	console.log("CLT")
}else if (inss3 <= 0) {
    console.log("PJ");
}

  console.log(`Funcinário(a): ${colaborador3.firstName}, sua contricuição no inss é:
  ${inss3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} no regime CLT `)


const inss4 = colaborador4.Salário * (0/100)
// //  console.log(inss4)
if (inss4 > 0 && inss4 < 0 || inss4 > 1) {
	console.log("CLT")
}else if (inss4 <= 0) {
    console.log("PJ");
}
 console.log(`Funcinário(a): ${colaborador4.firstName}, sua contricuição no inss é:
 ${inss4.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} não possui vínculo é PJ`)


 const inss5 = colaborador5.Salário * (14/100)
// //  console.log(inss5)
if (inss5 > 0 && inss5 < 0 || inss5 > 1) {
	console.log("CLT")
}else if (inss5 <= 0) {
    console.log("PJ");
}

console.log(`Funcinário(a): ${colaborador5.firstName}, sua contricuição no inss é: 
${inss5.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} no regime CLT`)