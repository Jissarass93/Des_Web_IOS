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
    
    Alunos.forEach((retorno) => {
        console.log(retorno.Nome,' nota:',retorno.nota)
        
    })

var totalNotas = 0
    for (let i = 0; i < Alunos.length; i++) {
        totalNotas += Alunos[i].nota;
    }
    

    totalNotas = totalNotas/ Alunos.length

    console.log(totalNotas)

    if (totalNotas >= 7) {
        console.log("Estão na média")
    }
    else { console.log("Estão abaixo da média")
}