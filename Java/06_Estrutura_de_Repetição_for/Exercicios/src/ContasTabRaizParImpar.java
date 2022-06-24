import java.util.Scanner;

public class ContasTabRaizParImpar {
    public static void main(String[] args) {
        int valor;
        Scanner numero = new Scanner(System.in);

        System.out.println("Digite um número:");
        valor = numero.nextInt();

        int multiplicador = 1;
        //calculo tabuada
        while (multiplicador <= 10) {
            int resultado = valor * multiplicador;
            System.out.println(valor + " X " + multiplicador + " = " + resultado);
            multiplicador++;
        }
        //par ou impar

        if (valor % 2 == 0) {
            System.out.println(valor + " \nNúmero par!");
        } else {
            System.out.println(valor + " \nNúmero ímpar!");

        }
        //calculo Raiz quadrada
        double raiz = Math.sqrt(valor);
        System.out.println("\nA raiz quadrada é :" + raiz);

        numero.close();
    }

}



