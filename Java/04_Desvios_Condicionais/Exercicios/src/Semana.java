import java.util.Scanner;

public class Semana {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite um número");

        int num = entrada.nextInt();
        switch (num) {
            case 1:
                System.out.println("O dia é Domingo");
                break;

            case 2:
                System.out.println("O dia é Segunda-Feira");
                break;

            case 3:
                System.out.println("O dia é Terça-Feira");
                break;

            case 4:
                System.out.println("O dia é Quarta-Feira");
                break;

            case 5:
                System.out.println("O dia é Quinta-Feira");
                break;

            case 6:
                System.out.println("O dia é Sexta-Feira");
                break;

            case 7:
                System.out.println("O dia é Sábado");
                break;

            default:
                 System.out.println("Número inválido");

        }
    }
}
