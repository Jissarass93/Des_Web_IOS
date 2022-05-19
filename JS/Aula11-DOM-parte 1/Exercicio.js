
console.log(window);
window.alert('Bem vindo ao meu site');

document.title = 'Exercício DOM';

//section
let section = document.createElement('section');
let title = document.createElement('h1');
let paragrafo = document.createElement('p');

section.appendChild(title);
section.appendChild(paragrafo);

title.innerHTML = 'JavaScript DOM!';
title.style.borderBottom = 'solid 3px  #6989CD';

paragrafo.innerHTML = 'Cada inconsciente relativo confunde-se, por meio de uma redução operacional, com a pulsão escópica recusa a castração que delimita o campo de intervenção do analista'
document.body.appendChild(section);

//article
let article = document.createElement('article');
let titulo = document.createElement('h1');
let conteudo = document.createElement('conteudo')

article.appendChild(titulo);
article.appendChild(conteudo);

titulo.innerHTML = 'DOM';
titulo.style.borderBottom = 'solid 3px  #6989CD';
conteudo.innerHTML = 'O que temos que ter sempre em mente é que a constante divulgação das informações afeta positivamente a correta previsão das novas proposições.';

document.body.appendChild(article);


