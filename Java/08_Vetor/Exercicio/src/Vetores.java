import java.util.Scanner;

public class Vetores {
    public static void main(String[] args) {
        double[] A = new double[4];
        double[] B = new double[7];

        Scanner entrada = new Scanner(System.in);

         double tamanho = A.length;
         double percorre= B.length;

        for (int i = 0; i < tamanho; i++) {
            System.out.println(" Digite a nota " + (i + 1));
            A[i] = entrada.nextDouble();
        }
        for (int i = 0; i < percorre; i++) {
            System.out.println(" Digite + nota " + (i + 5));
            B[i] = entrada.nextDouble();
        }
        for (int i = 0; i < tamanho; i++) {
            System.out.println(" nota : " + (i + 1) + " = " + A[i]);
        }

        for (int j = 0; j < percorre; j++) {
            System.out.println(" nota : " + (j + 5) + " = " + B[j]);
        }
        entrada.close();
    }
}


