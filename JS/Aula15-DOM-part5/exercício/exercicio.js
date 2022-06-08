const produto = document.getElementById('produto');
const quantidade = document.getElementById('quantidade');
const valor = document.getElementById('valor');
const items = document.getElementById('items');
const botao = document.getElementById('botao');

botao.addEventListener('click', adicionarProduto);

function adicionarProduto(e) {
    e.preventDefault()

    // Pegar valores do usuário
    let produtoNome = produto.value;
    let produtoQuantidade = Number(quantidade.value);
    let produtoValor = Number(valor.value);
    let produtoTotal = produtoValor * produtoQuantidade;

    // Atualizar a soma total quando o item for criado
    somaTotal += produtoValor * produtoQuantidade;
    atualizarSomaTotal();

    // Criando li para adicionar na lista de items
    let li = document.createElement('li');
    li.classList = 'list-group-item';
    li.innerText = `Produto: ${produtoNome} Quantidade: ${produtoQuantidade} Valor: ${produtoValor} Total: ${produtoTotal}`;

    // Botão de adicionar
    let botaoAdicionar = document.createElement("button");
    botaoAdicionar.innerText = "+";
    botaoAdicionar.classList = "btn btn-success btn-sm float-end p-1 active";
    botaoAdicionar.addEventListener("click", incrementarProduto);
    li.appendChild(botaoAdicionar);

    // Botão de diminuir
    let botaoDiminuir = document.createElement("button");
    botaoDiminuir.innerText = "-";
    botaoDiminuir.classList = "btn btn-warning btn-sm float-end p-1 active mx-3";
    botaoDiminuir.addEventListener("click", decrementarProduto);
    li.appendChild(botaoDiminuir);

    // Botão de excluir
    let botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "x";
    botaoExcluir.classList = "btn btn-danger btn-sm float-end p-1 delete";
    botaoExcluir.addEventListener("click", deletarProduto);
    li.appendChild(botaoExcluir);

    // Adicionando a li com as informações na lista de items
    items.appendChild(li)

    function incrementarProduto(e) {
        e.preventDefault();
        
        // Diminuir o valor da soma total dos produtos
        somaTotal += produtoValor;
        atualizarSomaTotal();

        // Aumentar quantidade do produto
        produtoQuantidade += 1;

        // Atualizar o total do produto
        produtoTotal = produtoQuantidade * produtoValor;

        // Atualizar informações na li
        li.innerText = `Produto: ${produtoNome} Quantidade: ${produtoQuantidade} Valor: ${produtoValor} Total: ${produtoTotal}`;

        // Adicionar os botões na li novamente
        li.appendChild( botaoAdicionar );
        li.appendChild( botaoDiminuir );
        li.appendChild( botaoExcluir );
    }
    
    function decrementarProduto(e) {
        e.preventDefault();

        // Diminuir o valor da soma total dos produtos
        somaTotal -= produtoValor;
        atualizarSomaTotal();

        // Diminuir quantidade do produto
        produtoQuantidade -= 1;

        // Atualizar o total do produto
        produtoTotal = produtoQuantidade * produtoValor;

        // Atualizar informações na li
        li.innerText = `Produto: ${produtoNome} Quantidade: ${produtoQuantidade} Valor: ${produtoValor} Total: ${produtoTotal}`;

        // Adicionar os botões na li novamente
        li.appendChild( botaoAdicionar );
        li.appendChild( botaoDiminuir );
        li.appendChild( botaoExcluir );
     }
    
    function deletarProduto(e) {
        e.preventDefault();

        // Atualizar a soma total quando o item for excluído
        somaTotal -= produtoValor * produtoQuantidade;
        atualizarSomaTotal();

        // Remover li inteira
        li.remove();
    }
}

// Paragrafo para colocar o valor total
const pTotal = document.getElementById( "p-total" );

// Variável para guardar a soma do valor total
let somaTotal = 0;

function atualizarSomaTotal ()
{
    // Atualizar o parágrafo e mostrar o total para o usuário
    pTotal.innerText = `Total: R$${somaTotal},00`;
}
