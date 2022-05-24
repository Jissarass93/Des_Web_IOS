// No arquivo HTML crie três botões.
// Crie uma classe chamada B_12 essa classe será aplicada em
// todos os botões.
// Em cada botão crie um Id o primeiro botão terá o Id de B_01, o
// segundo botão terá Id B_02 e assim por diante até o último botão.
// No main.js chame a class dos botões e insira o seguintes estilo:
// Borda de solid 2px #D9BC66
// Espaçamento de .5rem
// cor de fundo #BFBFBF
// margem de .7rem
// O primeiro botão terá um evento onclick onde ao clicar será
// chamada uma função no JS com os seguintes requisitos:
// Utilizando o DOM insira uma imagem da série Umbrella
// Academy ao lado do botão e mude a cor da body para #262525;
// No segundo botão terá um evento onclick onde ao clicar chama
// uma função no JS com os seguintes requisitos:
// terá que aparecer um prompt no browser solicitando o nome
// do usuário e quando o nome for informado o usuário clicar em OK
// o nome deverá aparecer abaixo do botão com uma mensagem
// "Olá (nome) Bem-vindo a nossa academia".
// No terceiro botão terá um evento onclick onde ao clicar chama
// uma função no JS com os seguintes requisitos:
// No browser deve aparecer um prompt perguntando um
// número para o usuário logo após informar o número ele deve
// retornar abaixo do botão a tabuada do número informado.
// Exemplo de retorno:


titulo.innerHTML = 'Exercício DOM-parte-2';

var btns = document.getElementsByClassName('B_12');
var btn1 = document.getElementById('B_01');
var btn2 = document.getElementById('B_02');
var btn3 = document.getElementById('B_03')



for (let i = 0; i < btns.length; i++) {
    btns[i].style.border = '2px solid #D9BC66';
    btns[i].style.padding = '.5rem';
    btns[i].style.margin = '.7rem';
    btns[i].style.backgroundColor = '#D9BC66';

}


function display_image(src) {
    var a = document.createElement("img");
    a.src = './img/umbrella-academy.jpeg';
    document.body.style.backgroundColor = '#262525'
    document.body.style.color = 'white'
    document.body.appendChild(a);
}

btn1.addEventListener('', display_image(a.src))



function display_nome() {
    var usuario = prompt('Escreva seu nome');
    var titulo = document.createElement('h2');
    titulo.innerText = 'Seu nome é';
    var nome = document.createElement('p');
    nome.innerText = `Olá ${usuario} Bem-vindo a nossa academia`;
    document.body.appendChild(titulo)
    document.body.appendChild(nome)
}


function display_numero() {


    var numero = prompt('coloque um numero');
    numero = parseInt(numero)

    if (isNaN(numero)) {
        alert('ERRO coloque um valor numerico')
        return
    }

    var titulo = document.createElement('h2');
    titulo.innerText = 'Tabuada';
    document.body.appendChild(titulo)

    for (let contador = 1; contador <= 10; contador++) {
        var soma = document.createElement('p')
        soma.innerText = `${numero} X ${contador} = ${numero * contador}`
        document.body.appendChild(soma)
    }


}

