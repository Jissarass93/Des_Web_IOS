import java.util.Scanner;

public class ParImpar {
    public static void main (String[] args){
        Scanner verificar = new Scanner(System.in);
        int numero= 0;
        System.out.println("digite um numero");
        numero = verificar.nextInt();

        if((numero % 2) ==0){
            System.out.println("O numero "+ numero + " é par");

        }
        else{
            System.out.println("O número " + numero + " é impar");
        }
        verificar.close();
    }
}
