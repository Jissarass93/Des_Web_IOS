import java.util.Scanner;

public class Inteiros {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("Digite 3 números");
        int num1 = entrada.nextInt();
        int num2 = entrada.nextInt();
        int num3 = entrada.nextInt();

        if (num1 == num2 && num1 == num3 ) {
            System.out.println("Todos os números são iguais ");
        } else {
            int valor = 0;
            int[] numbers = {num1, num2, num3};
            for (
                    int i = 0; i < numbers.length; i++
            ) {
                if (valor < numbers[i]) {
                    valor = numbers[i];

                }
            }
        System.out.println("O maior número é " +valor);
        }
        entrada.close();
    }

}
