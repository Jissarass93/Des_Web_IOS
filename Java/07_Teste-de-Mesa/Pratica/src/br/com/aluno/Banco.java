package br.com.aluno;

import java.util.Scanner;

public class Banco {
    public static void main(String[] args) {
        System.out.println("Banco SHcash");
        Scanner scanner = new Scanner(System.in);
        int contas;

        boolean condicao = true;
        while (condicao) {

            System.out.println("Selecione o tipo de conta");
            System.out.println("1-Conta-Corrente");
            System.out.println("2-Conta-Poupanca");
            System.out.println("3-Conta-Estudante");

            String contaCorrente = "1 Conta-Corrente";
            String contaPoupanca = "2 Conta-Poupanca";
            String contaEstudante = "3 Conta-Estudante";

            contas = scanner.nextInt();
            switch (contas) {
                case 1:
                    System.out.println("\nVoce selecionou a opcao: " + contaCorrente);
                    break;

                case 2:
                    System.out.println("Voce selecionou a opcao: " + contaPoupanca);
                    break;

                case 3:
                    System.out.println("Voce selecionou a opcao: " + contaEstudante);
                    break;

                default:
                    System.out.println("Opção inválida");
            }

            System.out.println("Desejar confirmar s/n ?");
            String resposta = scanner.next();
            if (resposta.equalsIgnoreCase("s")) {
                condicao = false;
            }
        }
        System.out.println("Voce esta no banco SHcash");
    }
}
