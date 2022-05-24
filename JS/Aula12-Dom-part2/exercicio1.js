
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

