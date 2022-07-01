import java.util.Locale;
import java.util.Scanner;

public class Frutas {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        String[] frutas = new String[5];

        for (int i = 0; i < 5; i++) {
            System.out.println("Digite uma fruta " + (i + 1) + " :");
            String vazia = entrada.nextLine();
            boolean adiciona = true;
            //verificar se a string está vazia ou se contem pelo menos 3 letras

            for (int j = 0; j < 5; j++) {
                if (frutas[j] == null) {
                    continue;
                }

                if (vazia.compareTo(frutas[j]) == 0 || vazia.isEmpty() || vazia.length() < 3) {
                    System.out.println("Conteudo inválido");
                    adiciona = false;
                    break;
                }
            }
            if (adiciona) {
                frutas[i] = vazia;
            }
        }

        for (int i = 0; i < frutas.length; i++) {
            if (frutas[i] != null) {
                System.out.print(frutas[i].toLowerCase()+ " ");
                System.out.print(frutas[i].toUpperCase() + " ");
                System.out.println(" ");

            }
            entrada.close();
        }
    }
}






