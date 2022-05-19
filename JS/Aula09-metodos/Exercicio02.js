// Exercício 2
// Crie um Arrays de Objetos chamado alunos com as informações abaixo: 
// ● Retorne somente o nome e o ano dos alunos
// ● Retorne apenas os alunos do segundo ano
// ● Faça a soma de todas as notas dos alunos e retorne a média 
// informando se os alunos ficaram acima da média que é 7

const Alunos =  [
        {Nome: 'Ana', idade:17, nota: 8, ano: '2°B' },

        {Nome: 'Bruno', idade:16, nota: 6, ano: '2°C' },

        {Nome: 'Veronica', idade:16, nota: 9, ano: '2°C' },

        {Nome: 'Marta', idade:15, nota: 5, ano: '3°C' },

        {Nome: 'Brenno', idade:19, nota: 6, ano: '3°C' },

        {Nome: 'Maria', idade:14, nota: 4, ano: '1°F' },
       
        
        
    ]

    function retorno(Nome, ano) {
        console.log(`Nome: ${Alunos.Nome}`);
        console.log(`ano: ${Alunos.ano}`);}
    
    //     if (item % 2 == 0) {
    //         console.log("Nome")
    //     }
    //     else { console.log("O numero é impar") }
    
    
    // }

        