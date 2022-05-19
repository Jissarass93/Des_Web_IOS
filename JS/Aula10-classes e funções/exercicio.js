class pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;

    }
    getIdade() {
        var idade = dataHoje.getFullYear() - this.dataNascimento.getFullYear()
        if (dataHoje.getMonth() < this.dataNascimento.getMonth() || (dataHoje.getMonth() == this.dataNascimento.getMonth() && dataHoje.getDate() < this.dataNascimento.getDate)) {
            idade -= 1
        }
        return idade
    }

    
}

const dataHoje = new Date()

let pessoas = new Array(10);
pessoas[0] = new pessoa('Joao', new Date(2003, 4, 31));
pessoas[1] = new pessoa('Maria', new Date(1990, 7, 15));
pessoas[2] = new pessoa('Sofia', new Date(1930, 6, 18));
pessoas[3] = new pessoa('Helena', new Date(1993, 4, 25));
pessoas[4] = new pessoa('Henrique', new Date(1998, 8, 1));
pessoas[5] = new pessoa('Luan', new Date(2000, 11, 5));
pessoas[6] = new pessoa('Pedro', new Date(2004, 12, 3));
pessoas[7] = new pessoa('Manuela', new Date(1980, 1, 9));
pessoas[8] = new pessoa('Artur', new Date(1991, 2, 8));
pessoas[9] = new pessoa('Gael', new Date(1960, 10, 29));


// console.log(pessoas[1].getIdade())
function niver() {
    if (dataHoje.getMonth() < this.dataNascimento.getMonth() || (dataHoje.getMonth() == this.dataNascimento.getMonth() && dataHoje.getDate() < this.dataNascimento.getDate())) {
        return false
    }
    return true

}
pessoa.prototype.getNiver = niver;

// console.log(pessoas[1].getNiver());

pessoas.forEach((p) => {
    console.log(`${p.nome} tem idade: ${p.getIdade()} anos`);

    console.log(`${p.nome} já fez aniversário ? ${p.getNiver()}`);
});

