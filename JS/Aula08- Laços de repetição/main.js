//Laço while do Matheus
let profhelo = 1;

// while(profhelo <=5){
// console.log("bate palma");
// // profhelo = profhelo + 1
// profhelo++

// }
// do{
//     console.log("bater palma")
//     console.log(profhelo)
//     profhelo++
// }while(profhelo <= 5);

// let contador = 1;

// while(contador <= 10){
//     console.log(`O valor do contador é ? ${contador} `)
//     contador++
// }

//decremento
// let contador2 = 10;
// while(contador2 >=0){
//     console.log(`O valor do contador é ? ${contador2}`)
//     //contador2 = contador2 - 1
//     contador2--
// }

//for
// for(let profhelo1 = 1; profhelo1<=5 ;profhelo1++){
//     console.log("Olá Jackass")
// }

//Começa com valor 10 e termina com 0
// for (let prof2 = 10; prof2 >=0 ; prof2--){
//     console.log(prof2)
// }


//incrementar mais de 1
// while (profhelo <= 5) {
//     console.log("bate palma");
//     profhelo = profhelo + 2
    // profhelo+=2
// }

//laços de repetição e Array
// const frutas =['maca','laranja','pera',10]

// for(let j =0; j< frutas.length; j++){
//     console.log(`Nome: ${frutas[j]}`)
// }

// const carros =['fusca','corolla','Discovery','renegade','foccus','hilux','tuscon','etios']

// for(let d =0; d< carros.length; d+=2){
//     console.log(`Nome do carro: ${carros[d]}`)
// }

// Array de objetos e laços
console.clear();
const todos = [
{
id: 1,
text: 'Take out trash',
isCompleted: true,
},
{
id: 2,
text: 'Meeting with boss',
isCompleted: true,
},
{
id: 3,
text: 'Dentist appt',
isCompleted: false,
},
];
// For overloop
for (let t of todos) {
console.log(t);
console.log(t.text);
console.log(t.id);
}
