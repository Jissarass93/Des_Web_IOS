import java.util.Scanner;

public class JogoAdivinha {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int palpite;
        System.out.println("Digite seu palpite");
        palpite = teclado.nextInt();

        if (palpite == 15){
            System.out.println("Você acertou!!!");
        }
        else{
            if(palpite < 15) {
                System.out.println("Seu palpite está abaixo !!!");
            } else{
                System.out.println("Seu palpite está acima.");
            }
        }
teclado.close();
    }
}
