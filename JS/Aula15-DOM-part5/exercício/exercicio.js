const produto = document.getElementById('produto');
const quantidade = document.getElementById('quantidade');
const valor = document.getElementById('valor');
const items = document.getElementById('items');
const botao = document.getElementById('botao');

botao.addEventListener('click', adicionarProduto)

function adicionarProduto(e) {
    e.preventDefault()

    // Pegar valores do usuário
    let produto1 = produto.value;
    let quantidade1 = Number(quantidade.value);
    let valor1 = Number(valor.value);
    let total = valor1 * quantidade1

    // Criando li para adicionar na lista de items
    let li = document.createElement('li');
    li.classList= 'list-group-item'
    li.innerText = `Produto: ${produto1} Quantidade: ${quantidade1} Valor: ${valor1} Total: ${total}`;
    
    // Botão de adicionar
    let botaoAdicionar = document.createElement("button")
    botaoAdicionar.innerText = "+"
    botaoAdicionar.classList = "btn btn-success btn-sm float-end p-1 active"
    botaoAdicionar.addEventListener("click", incrementarProduto)
    li.appendChild(botaoAdicionar)

    // Botão de diminuir
    let botaoDiminuir = document.createElement("button")
    botaoDiminuir.innerText = "-"
    botaoDiminuir.classList = "btn btn-warning btn-sm float-end p-1 active mx-3"
    botaoDiminuir.addEventListener("click", decrementarProduto)
    li.appendChild(botaoDiminuir)

    // Botão de excluir
    let botaoExcluir = document.createElement("button")
    botaoExcluir.innerText = "x"
    botaoExcluir.classList = "btn btn-danger btn-sm float-end p-1 delete"
    botaoExcluir.addEventListener("click", deletarProduto)
    li.appendChild(botaoExcluir)

    // Adicionando a li com as informações na lista de items
    items.appendChild(li)
}

function incrementarProduto (e){
    e.preventDefault()

    // Li que o botão pertence
    let li = this.parentElement
    console.log(li)
}

function decrementarProduto (e){
    e.preventDefault()

    // Li que o botão pertence
    let li = this.parentElement
    console.log(li)
}

function deletarProduto (e){
    e.preventDefault()

    // Li que o botão pertence
    let li = this.parentElement
    console.log(li)
}
