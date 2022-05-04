
 const objetos = ["mesa","cama", "sofa", "tapete" ,"cadeira"] ;
 let text = objetos.toString();
 console.log(`Maria estava mobilhando sua casa e ja havia comprado alguns móveis como: ${objetos}`)

 //splace selecione objetos
 objetos.splice(2, 0, "geladeira", "fogão");
 console.log(`ela ganhou uma geladeira e um fogão`)

 objetos.splice (2, 0, "Televisão", "televisão" );
console.log(`ela ganhou 2 TV´S`)


delete objetos[3]; 
console.log(`ela doou uma de suas tv´s`);


console.log(` Maria com sua compras e algumas doações ficou com alguns objetos para sua casa que são: ${objetos}.`)


