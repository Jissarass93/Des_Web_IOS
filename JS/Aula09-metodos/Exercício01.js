
const valores = [17, 43, 8, 4, 97, 56, 29]

valores.forEach(posicao);

function posicao(item, index) {
    console.log(`Indice: ${index}`);
    console.log(`Elemento: ${item}`);

    if (item % 2 == 0) {
        console.log("O número é par")
    }
    else { console.log("O numero é impar") }


}

 var filtro = valores.filter((valor) => {
   return valor <= 18 ;
})
    console.log(filtro);

