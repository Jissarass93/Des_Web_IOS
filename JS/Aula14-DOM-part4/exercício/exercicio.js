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
var str_data = dia + '/' + (mes + 1) + '/' + ano4; // Formata a data e a hora (note o mês + 1)


// pegando o valor do nome pelos names
var nome = document.getElementById("name");
var email = document.getElementById("email");
var dataNascimento = document.getElementById("dataNascimento");
var form = document.getElementById('formulario');
var users = document.getElementById('users');
var deletar = document.getElementById('excluir')

deletar.addEventListener('click', Excluir)
function incluirPessoa(e) {
  e.preventDefault()

  if (!verificarIdade()) {
    return
  }
  if (!validarEmail()) {
    return
  }

  var li = document.createElement('li')
  li.innerText = `${nome.value} , ${dataNascimento.value} , ${email.value}`
  users.appendChild(li)
}

form.addEventListener('submit', incluirPessoa)

function verificarIdade() {
  //calculando a idade
  var nascimento = new Date(dataNascimento.value)
  var idade = data.getFullYear() - nascimento.getFullYear()
  if (data.getMonth() < nascimento.getMonth() || (data.getMonth() == nascimento.getMonth() && data.getDate() < nascimento.getDate() + 1)) {
    idade -= 1
  }
  //validando a idade
  if (idade < 18) {
    console.log('usuario não incluido, menor de idade');
    return false;
  }
  return true;
}

function validarEmail() {
  let padrao = new RegExp(/.*@.*\..*/i);
  padrao.test(email.value);
  if (padrao.test(email.value)) {
    return true
  }
  alert('email inválido');
  return false
}

function Excluir() {
  var cadastrados = users.getElementsByTagName('li');
  var numero = parseInt(item.value)
  var li =  cadastrados[numero];
li.remove()
console.log(li)
 
}
