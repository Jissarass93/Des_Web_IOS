public class Teste {
    public static void main(String[] args) {
        int controle, acumulador = 0;
        boolean condicao;
        System.out.println("Numero da iteração\tCondição\tControle\tAcumulador");
        for (controle = 1; controle <= 10; controle++) {
            acumulador += controle;
            condicao = controle <= 10;
            System.out.println("Iteração " + controle + "\t\t\t" + condicao + "\t\t\t"
                    + controle + "\t\t\t" + acumulador);
        }
    } // fim do método main
}
//variavel do tipo inteiro com valor inicial 10
//variavel controle com valor 10
//Criação de variavel acumulador valor inicial 1
//criacao de variavel condição booleana(true or false)
//System estrutura de repetição while onde a variável controle é menor q 10
//criou variavel interação esta variavel esta recebendo 10 manos controle mais 1
//variavel acumulador esta recebendo o valor dela sendo multiplicado pela variavel controle
//System.out(Saida das variaves)
//controle = 10 continua fluxo
//intercao = 1
//acumulador


