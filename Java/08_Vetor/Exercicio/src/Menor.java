import java.util.Random;

public class Menor {
    public static void main(String[] args) {

        Random rand = new Random();
        int[]  num = new int[10];



        for (int i = 0; i < num.length; i ++){
            num[i] = rand.nextInt(10);

            System.out.println("os numeros é: " + num[i]);
        }


    }
}
