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

function validar() {
  // pegando o valor do nome pelos names
  var nome = document.getElementById("name"); 
  var email = document.getElementById("email");
    var dataNascimento = document.getElementById("dataNascimento");   
   var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
    var check=/@[w-]+./;
    var checkend=/.[a-zA-Z]{2,3}$/;

  // verificar se o nome está vazio
  if (nome.value == "") {
    alert("Nome não informado");

    // Deixa o input com o focus
    nome.focus();
    // retorna a função e não olha as outras linhas
    return;
  }
  
 function IsEmail(){
    
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1))
    {return false;}
    else {return true};   
  }
  
  
  if (dataNascimento.value == "") {
    alert(" não informado");
    dataNascimento.focus();
    return;
  }}



  
  // alert("Formulário enviado!");
  // envia o formulário
  //formulario.submit();
