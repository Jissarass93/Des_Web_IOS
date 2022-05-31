// let form = document.getElementById('addForm');
// let itemList = document.getElementById('items');
// let filter = document.getElementById('filter');


// form.addEventListener('submit', addItem);
// itemList.addEventListener('click', removeItem);
// filter.addEventListener('keyup', buscarItems);

// function addItem(e) {
//     e.preventDefault();
//     // Pega o valor do <input>
//     let newItem = document.getElementById('item').value;
//     // Cria novo elemento <li>
//     let li = document.createElement('li');
//     // Adiciona classe
//     li.className = 'list-group-item';
//     // Adiciona o texto no novo elemento com o valor armazenado no newItem
//     li.appendChild(document.createTextNode(newItem));
//     // Cria o elemento botão para deletar um item
//     let deleteBtn = document.createElement('button');
//     // Adiciona classes para o botão de deletar
//     deleteBtn.className = 'btn btn-danger btn-sm float-end p-1 delete';
//     // Acrescenta o texto no novo elemento
//     deleteBtn.appendChild(document.createTextNode('x'));
//     // Acrescenta o botão no elemento li
//     li.appendChild(deleteBtn);
//     itemList.appendChild(li); // Adiciona o novo item na lista
//     form.reset(); // Limpa o formulário
// }
// function removeItem(e) {
//     if (e.target.classList.contains('delete')) {
//         let li = e.target.parentElement;
//         itemList.removeChild(li);
//     }
// }


// // Delete event
// itemList.addEventListener('click', addItem);
// // Filter event
// filter.addEventListener('keyup', buscarItems);
// function adicionaBotao(e) {
//     e.preventDefault();
//     // Pega o valor do <input>
//     let newItem = document.getElementById('item').value;
//     // Cria novo elemento <li>
//     let li = document.createElement('li');
//     // Adiciona classe
//     li.className = 'list-group-item';
//     // Adiciona o texto no novo elemento com o valor armazenado no newItem
//     li.appendChild(document.createTextNode(newItem));
//     // Cria o elemento botão para adicionar um item
//     let activeBtn = document.createElement('button');
//     // Adiciona classes para o botão de deletar
//     activeBtn.className = 'btn btn-success btn-sm float-end p-1 active';
//     // Acrescenta o texto no novo elemento
//     activeBtn.appendChild(document.createTextNode('+'));
//     // Acrescenta o botão no elemento li
//     li.appendChild(activeBtn);
//     itemList.appendChild(li); // Adiciona o novo item na lista
//     form.reset(); // Limpa o formulário
// }
// var frutas = ['Banana', ' Maça', 'Morango', 'Melão','Manga']


var quantidadeFrutas = [0, 0, 0, 0, 0, 0, 0, 0]
const valorFrutas =[1, 5, 2.5, 5, 8, 5, 5, 2.5]
const nomeFrutas= ["Maçã", "Abacate", "Banana", "Jaca", "Melancia", "Mamão", "Melão", "Caqui"]
const Botoes= ["btnMaca", "btnAbacate", "btnBanana", "btnJaca", "btnMelancia", "btnMamão", "btnMelão", "btnCaqui"]

function somaUm(varDeArmazenamento){
varDeArmazenamento = varDeArmazenamento++;
}


for (i= 0; i< valorFrutas.length; i++){
    document.getElementById(botoes[i]).addEventListener("onClick", somaUm(quantidadeFrutas[i])
}
