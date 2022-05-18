// Criar uma classe pessoa com as propriedades nome e
// dataNascimento e o método getIdade() e um array de
// pessoas com 10 posições, instanciar a classe pessoa em
// cada índice do array, adicionar o método getNiver() por
// prototype que retorna true se já fez aniversário e false se
// ainda não fez no ano corrente, exibir o texto “Fulano tem X
// anos e já/ainda não fez aniversário esse ano” para cada
// pessoa do array (Utilizar If e For).
// getMonth() retorna o mês de uma data (0 a 11)
// getDate() retorna o dia do mês de uma data (1 a 31)

class pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;

    }
    getIdade() {
        var idade = dataHoje.getFullYear() - this.dataNascimento.getFullYear()
        if (dataHoje.getMonth() <= this.dataNascimento.getMonth() && dataHoje.getDate() < this.dataNascimento.getDate()) {
            idade -= 1
        }
        return idade
    }


    // getNiver() {
    //     if (dataHoje.getMonth() <= this.dataNascimento.getMonth() && dataHoje.getDate() < this.dataNascimento.getDate()) {
    //         return false
    //     }
    //     return true
    // }
}

const dataHoje = new Date()

let pessoas = new Array(10);
pessoas[0] = new pessoa('Joao', new Date(2003, 4, 31));
pessoas[1] = new pessoa('Maria', new Date(1990, 7, 15));
pessoas[2] = new pessoa('Maria', new Date(1930, 6, 18));
pessoas[3] = new pessoa('Maria', new Date(1993, 4, 25));
pessoas[4] = new pessoa('Maria', new Date(1998, 8, 1));
pessoas[5] = new pessoa('Maria', new Date(2000, 11, 5));
pessoas[6] = new pessoa('Maria', new Date(2004, 12, 3));
pessoas[7] = new pessoa('Maria', new Date(1980, 1, 9));
pessoas[8] = new pessoa('Maria', new Date(1991, 2, 8));
pessoas[9] = new pessoa('Maria', new Date(1960, 10, 29));


// console.log(pessoas[1].getIdade())

pessoa.prototype.getNiver = () => {
    if (dataHoje.getMonth() <= this.dataNascimento.getMonth() && dataHoje.getDate() < this.dataNascimento.getDate()) {
        return false
    }
    return true
};

console.log(pessoas[1].getNiver())