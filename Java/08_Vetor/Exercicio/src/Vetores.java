import java.util.Scanner;

public class Vetores {
    public static void main(String[] args) {
        double[] A = new double[4];
        double[] B = new double[7];
        double[] C = new double[11];

        Scanner entrada = new Scanner(System.in);

        int tamanho = C.length;
        for (int i = 0; i < 4; i++) {
            C[i] = A[i];
        }

        for (int i = 10; i < 10; i++) {
            C[i] = B[i];
        }

        for (int i = 0; i < tamanho; i++) {
            System.out.println(" Digite a nota " + (i + 1));
            C[i] = entrada.nextDouble();

        }
        for (int j = 0; j < tamanho; j++) {
            System.out.println(" nota : " + (j + 1) + " = " + C[j]);
        }
        entrada.close();
    }
}



