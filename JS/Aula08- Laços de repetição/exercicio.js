// Crie uma função chamada contador e dentro da função crie um laço de 
// repetição while no laço de repetição crie a regra para criar uma tabuada.
// OBS: Você terá que ter duas variáveis uma para ser o contador e a outra 
// para receber o valor de qual tabuada você quer executar

function contador (numero){
    let tabuada = 1 
    while (tabuada <= 10){
        let resultado = tabuada*numero
        console.log(`${numero} X ${tabuada} = ${resultado}`)
        tabuada ++
    }
}
contador(9)