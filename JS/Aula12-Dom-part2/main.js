//Metodo get   Element    By   Id
//      pega  elemento   pelo  ID

let titulo = document.getElementById('titulo');

//Alternado o conteudo HTML
titulo.innerHTML = 'Vai perder o PC galera do AWS';

//Configurnado o CSS do html
titulo.style.textAlign = 'center';
titulo.style.background = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';

//Metodo getElementBy
let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
// items[1].textContent = 'Hello 2';
items[1].textContent='Eric e jheniffer trobadinhas de PC';
items[1].style.fontweight = 'bold';
items[1].style.backgroundColor = 'red';
items[1].style.padding = '.5rem'

// Utilizando o FOR para percorrer a lista
for(let i= 0; i < items.length; i++){
    items[i].style.backgroundColor = '#CCCCC9'
}

// Metodo getElementByTagName
let li = document.getElementsByTagName('li');
console.log(li)
for(let i =0; i < li.length; i+=2){
    li[i].style.backgroundColor = 'pink'
}

//metodo getElementBayName
let nome =  document.getElementsByName('fitem');
console.clear()
console.log(nome);
nome[0].textContent = 'Pose de Quebrada';
nome[0].style.backgroundColor = '#BAC1FB';
nome[1].textContent = 'RECEBAA';
nome[1].style.backgroundColor = 'yellow';

//remover conteudo
let item2 = document.getElementById('item2');
item2.remove();

//inserir um valor
let lista = document.getElementById('items');
let item1 = document.getElementById('item1');
lista.insertBefore(item2,item1.nextElementSibling);

//Alterar estilo da lista
let ul = document.getElementById('items');
ul.style.listStyle = 'nome';
ul.style.listStyle = 'decimal inside';

let teste = document.getElementById('items');
let teste1 = teste.getElementsByTagName('li');
console.log(teste1);

