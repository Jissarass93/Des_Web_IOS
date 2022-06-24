import java.util.Scanner;

public class Idade {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int valor;
        int[] idade = new int[5];
        int contador;


        for ( contador = 0; contador <5 ; contador++) {

            System.out.print("Digite sua idade : ");
            valor = scan.nextInt();

        }
scan.close();
    }
}
