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