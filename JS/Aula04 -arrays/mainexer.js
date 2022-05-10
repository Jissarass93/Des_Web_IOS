let festa1 = ["joaquim","jose", "silva", "Xavier"];
 console.log(` Á festa começou com ${festa1}`)

let w = festa1.unshift("Amanda"); 
console.log(`Amanda entrou na festa`);


let x = festa1.pop("Xavier"); 
console.log(`Xavier saiu`);

let y = festa1.push("Zuleica"); 
console.log(`Zuleica chegou`);

let z = festa1.shift(); 
console.log(`Amanda saiu`);

delete festa1[2];
console.log(`Silva saiu`);

festa1[2] = "Silvana"
console.log(`Silvana entrou`)

console.log(` Á festa fiocu com 4 pessoas são elas: ${festa1}`)
