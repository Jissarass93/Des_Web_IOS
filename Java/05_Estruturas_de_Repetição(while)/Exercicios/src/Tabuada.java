import java.util.Scanner;

public class Tabuada {
    public static void main(String[] args) {
        int valor ;

        Scanner numero = new Scanner(System.in);
        System.out.println("Digite um número:");
        valor = numero.nextInt();

        int multiplicador = 1;
        while(multiplicador <= 10)
        {
            int resultado = valor * multiplicador;
            System.out.println( valor + " X " + multiplicador + " = " + resultado);
            multiplicador++;
        }
        numero.close();
    }
}

