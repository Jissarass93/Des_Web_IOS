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

    getNiver() {
        if (dataHoje.getMonth() <= this.dataNascimento.getMonth() && dataHoje.getDate() < this.dataNascimento.getDate()) {
            return false
        }
        return true
    }
}

const dataHoje = new Date()

let pessoas = new pessoa[10]
pessoa[0] = 'Joao', new Date(2003, 4, 31)
pessoa[1] = 'Maria', new Date(1990, 7, 15)


console.log([].getIdade())



// pessoa.prototype.getNiver = function () {
//     return `${this.getNiver}`;

// }