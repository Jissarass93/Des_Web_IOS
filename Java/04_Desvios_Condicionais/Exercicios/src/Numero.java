import java.util.Scanner;

public class Numero {
    public static void main (String[] args){
        Scanner entrada = new Scanner(System.in);
//
        System.out.println("Digite um número");
        float num1 = entrada.nextFloat();

        System.out.println("Digite outro número");
        float num2 = entrada.nextFloat();

        if (num1 > num2){
            System.out.println("Decresente");
            System.out.println("Primeiro numero é : "+ num1);
            System.out.println("Segundo número é : "+ num2);
        }
            else if(num1 < num2){
            System.out.println("Decresente");
            System.out.println("Primeiro numero é : "+ num2);
            System.out.println("Segundo número é : "+ num1);

            }
entrada.close();
    }
}
