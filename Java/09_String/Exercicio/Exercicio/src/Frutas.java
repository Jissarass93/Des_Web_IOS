import java.util.Scanner;
import java.util.ArrayList;
public class Frutas {
    public static void main(String[] args) {


        Scanner entrada = new Scanner(System.in);
        String[] frutas = new String[5];
        String[] vazia = new String[5];
        int numeroDeTextos = 5;

        for (int i = 0; i < 5; i++) {
            System.out.println("Digite uma fruta " + (i+1)+" :");
            frutas[i] = entrada.next();
        }

        for (int i = 0; i < frutas.length; i++)
        {
            System.out.println(frutas[i]);
        }



        }
    }







