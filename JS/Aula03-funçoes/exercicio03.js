let notebook = {
    marca: 'Samsung',
    versaoWindows: '11',
    carregador: 'sim',
    processador: `intelCorei5`,
    valor: 3500
}

console.log(`Notebook: ${notebook.marca}
windows: ${notebook.versaoWindows} 
carregador: ${notebook.carregador}
processador : ${notebook.processador}
valor: ${notebook.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)