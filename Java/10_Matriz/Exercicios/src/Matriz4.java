import java.util.Scanner;

public class Matriz4 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        int numero[][] = new int[4][4];

        int inicio = 0;

        //Criando função;
        for (int i = 0; i < numero.length; i++) {
            for (int j = 0; j < numero[i].length; j++) {
                System.out.println("Digite um número para a posição [" + i + "][" + j + "]");
                numero[i][j] = entrada.nextInt();
            }
        }
        System.out.println("<=Números maiores que 10=>");
        for (int i = 0; i < numero.length; i++) {
            for (int j = 0; j < numero[i].length; j++) {

                //Criando uma condição enquanto...
                if (numero[i][j] > 10) {
                    System.out.println("[ " + numero[i][j] + " ] \t");
                    inicio++;
                }
            }
        }
        System.out.println("Encontramos " + inicio + " números nmaior que 10");
        System.out.println(" ");


        System.out.println("<<<<=Elementos da Matriz=>>>>");


        for (int i = 0; i < numero.length; i++) {
            for (int j = 0; j < numero[i].length; j++) {
                System.out.print(numero[i][j] + "\t");
            }
            System.out.println(" ");
        }
        entrada.close();
    }

}



