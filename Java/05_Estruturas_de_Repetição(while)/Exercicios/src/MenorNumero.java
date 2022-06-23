import java.util.Scanner;

public class MenorNumero {
    public static void main(String[] args) {
        float menor,
                num;
        int contador = 2; //contador com o valor '2', para que ele possa contar do número 2 até o 10, dentro do laço while.
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite 10 números ");
        System.out.print("Numero 1: ");
        num = entrada.nextFloat();
        menor = num;

        while (contador <= 10) {
            System.out.print("Numero " + contador + ": ");
            num = entrada.nextFloat();

            if (num < menor) {
                menor = num;
            }

            contador++;
        }

        System.out.println("O menor número digitado é: " + menor);
        entrada.close();
    }
}

