// Criar um form com 4 campos (nome, dataNasc, email e
//     item) e 2 botões Incluir e Excluir. O botão Incluir deverá
//     trabalhar com os campos nome, dataNasc e email.
//     criando uma lista de inscritos (maiores de 18 anos) e email validado por RegEx, caso não seja maior ou e-mail
//     inválido emitir a mensagem e não incluir no formulário.
//     O botão Excluir trabalhará com o campo item, onde o
//     código de Item informado em conjunto com a ação de
//     click deverá remover o inscrito correspondente.
var data = new Date(); // Obtém a data/hora atual
var dia = data.getDate(); // 1-31
var mes = data.getMonth(); // 0-11 (zero=janeiro)
var ano4 = data.getFullYear(); // 4 dígitos
var str_data = dia + '/' + (mes+1) + '/' + ano4; // Formata a data e a hora (note o mês + 1)

    

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
      
  console.log(validateEmail('texto@texto.com')); // true
  console.log(validateEmail('texto@texto')); // false
  console.log(validateEmail('texto.com')); // false
  console.log(validateEmail('texto')); // false

var botao1= document.getElementById('incluir')
botao1.addEventListener('click',incluirPessoa);

function incluirPessoa(){
    alert('teste')
}