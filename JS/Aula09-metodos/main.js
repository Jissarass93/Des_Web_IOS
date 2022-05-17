//metodo forEach com arrays
// const frutas =['Maca','Pera','Melancia']
// frutas.forEach(minhaFuncao);

//     function minhaFuncao(index , item ){
//         console.log(`Indice: ${item}`);
//         console.log(`Elemento: ${index}`)
//     }

// Arrow Function
// const frutas2 = ['Maca','Pera','Melancia']
// frutas2.forEach((index, item) => {
//     console.log(`Indice: ${item}`)
//     console.log(`Elemento: ${index}`)

// })

//Forma mas enxuta de escrever funlões

const tarefas= [
    {
        id: 1,
        texto: 'Aqui vai um texto'
    },
    {
        id: 2,
        texto: 'Aqui vai dois textos'
    },
    {
        id: 3,
        texto: 'Aqui vai três texto'
    }
];
// tarefas.forEach((teste) =>console.log(teste.texto))

//metodo map thisArg(argumento) metodo ´Math´ sqrt(rais quadrada)
// const numeros = [16, 4, 9, 25];
// const newArray = numeros.map(Math.sqrt);

// console.log(`Array antigo`);
// console.log(numeros);
// console.log(`Novo Array`);
// console.log(newArray);

//outro exemplo de map
// const mapText = tarefas.map((valor) =>{
//     return valor.texto;
// })

// console.log(mapText)

//metodo filter()
// const idade= [32, 15, 8, 98, 70]

// let filtroIdade = idade.filter((idades) => {
//    return idades >= 18 ;
// })
//     console.log(filtroIdade);

//metodo find()
// const meuArray = [
//     {Nome: 'Diego', idade:12, altura: 120, sexo: 'masculino' },

//     {Nome: 'Jissara', idade:15, altura: 170, sexo:'feminino'},

//     {Nome: 'Jheniffer', idade:70, altura: 180, sexo:'feminino'},
// ]
// find retorna apenas o primeiro /o filter retorna todos 
// console.log(
//     meuArray.find((genero) =>{
//         return genero.sexo === 'feminino'
//     })
// )
// console.log(
//     meuArray.filter((genero) =>{
//         return genero.sexo === 'feminino'
//     })
// )

//crie um array de quatro objetos com 4 objetod
//e cada objeto tera 4 propriedades 
//retorne o nome de todos os alunos
//retorne o nome de todos os alunos que tirou nota maior que 6 
//retorne o primeiro aluno que tirou nota menor que 5

const Alunos = [
         {Nome: 'Diego', idade:13, nota: 7, materia: 'portugues' },
    
         {Nome: 'Paulo', idade:15, nota: 4, materia:'matemática'},
    
        {Nome: 'Jheniffer', idade:16, nota: 8, materia:'biologia'},

        {Nome: 'joaquim', idade:17, nota: 9, materia:'história'},
     ]


     Alunos.forEach((nomes) => console.log(nomes.Nome));

     const notas= [7, 4, 8, 9];

      let filternotas = notas.filter((valor) => {
         return valor >= 6 ;
      })
         console.log(filternotas);








