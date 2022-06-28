import java.util.Scanner;

public class Nomes {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        String[] nome = new String[5];

        for (int i = 0; i < 5; i++) {
            System.out.println("Entre com nome " + (i+1)+" :");
            nome[i] = scanner.next();
        }

        for (int i = 4; i >=0 ; i--){
            System.out.println(nome[i]);
        }
    }
}

