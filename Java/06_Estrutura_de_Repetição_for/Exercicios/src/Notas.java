import java.util.Scanner;

public class Notas {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite 8 notas :");

        float total = 0;
        for(float i =0; i < 8; i++){
            total+= scanner.nextFloat();

        }
        float media = total/8;
        System.out.println("Sua média é : "+ media);
        scanner.close();
    }
}
