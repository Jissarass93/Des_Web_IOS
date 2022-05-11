var Aluno1 = {
    firstName: 'Maria',
    lastName: 'Marino',
    idade: 15,
    corFavorita: 'Amarelo',
    livro: 'Eclipce',
    filme: 'A era do gelo',
    Nota1 : [7,6,8,9],
    endereco: [
     'Rua do bosque','n 30','São Paulo-SP',
],
    };
    //SOMANDO AS NOTAS DO ARRAY usando ´loop for´
    const Nota1 = [7,6,8,9]
    let soma1 = 0;
    
    for (let x = 0; x < Nota1.length; x++) { //o x++ serve para imcrementar um valorda variável ex:x++ é x=x+1
        soma1 += Nota1[x];                   // length é um atributo que mostra quantos caracteres tem no texto
    }
    // console.log(soma1);

    var media1 = (soma1)/4
    // console.log(media1)      
          
      console.log(` A aluna ${Aluno1.firstName} com as notas ${Nota1} mora em ${Aluno1.endereco} e teve a média :${media1} , portando foi Aprovada.`)
      

var Aluno2 = {
    firstName: 'Gael',
    lastName: 'Pereira',
    idade: 16,
    corFavorita: 'Azul',
    livro: 'cidades de papel',
    filme: 'Espotâneas',
    Nota : [6,6,8,7],
    endereco: ['Rua do Fradique','n 126','São Paulo-SP',
            ],
        };
const Nota2 = [6,6,8,7]
    let soma2 = 0;
    
    for (let x = 0; x < Nota2.length; x++) {
        soma2 += Nota2[x];
    }
    // console.log(soma2);

    var media2 = (soma2)/4
    // console.log(media2)    
          
      console.log(` O aluno ${Aluno2.firstName} com  as notas ${Nota2} mora em ${Aluno2.endereco} e teve a média :${media2} , portando foi Reprovado.`)

var Aluno3 = {
        firstName: 'Matilda',
        lastName: 'Silva',
        idade: 15,
        corFavorita: 'preto',
        livro: 'quem é você Alaska',
        filme: 'cidades de papel',
        Nota : [5,6,9,7],
        endereco: [
         'Rua do OURO','n 15','São Paulo-SP',
                ],
            };
const Nota3 = [5,6,9,7]
    let soma3 = 0;
    
    for (let x = 0; x < Nota3.length; x++) {
        soma3 += Nota3[x];
    }
    // console.log(soma2);

    var media3 = (soma3)/4
    // console.log(media2)      
          
      console.log(` A aluna ${Aluno3.firstName} com  as notas ${Nota3} mora em ${Aluno3.endereco} e teve a média :${media3} , portando foi Reprovada.`)
           