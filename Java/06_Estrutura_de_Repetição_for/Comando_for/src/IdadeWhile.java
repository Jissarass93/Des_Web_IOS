import java.util.Scanner;

public class IdadeWhile {
    public static void main(String[] args) {
        int idade = 0;
        int valor;


        Scanner scanner = new Scanner(System.in);
        while (idade < 5) {

            System.out.println("Digite sua idade : " );
            valor = scanner.nextInt();
            System.out.println("Sua idade é : "+ valor + " anos." );
            idade++;
        }
    }
}
