import java.util.Scanner;

public class MaiorMenorMedia {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int maior;
        int[] numeros = new int[10];
        int tamanho = numeros.length;
        int menor;

        for (int i = 0; i < tamanho; i++) {
            System.out.println("Digite um número:");
            numeros[i] = entrada.nextInt();
        }
        maior = numeros[0];

        for (int i = 0; i < tamanho; i++) {
            if (numeros[i] > maior) {
                maior = numeros[i];
            }
        }
        System.out.println("O maior número é: " + maior);

        menor = numeros[0];
        for (int i = 0; i < tamanho; i++) {
            if (numeros[i] < menor) {
                menor = numeros[i];
            }
        }
        System.out.println("O menor número é: " + menor);

        float media, total = 0;

        for (int i = 0; i < numeros.length; i++)
             total += numeros[i];

        media = total/numeros.length;

        System.out.println( "Sua média é :" + media);

        entrada.close();

    }
}

