import java.util.Random;

public class Menor {
    public static void main(String[] args) {

        Random rand = new Random();
        int[]  num = new int[10];

        int menor;


        for (int i = 0; i < num.length; i ++){
            num[i] = rand.nextInt(10);

            System.out.println("os numeros �: " + num[i]);
        }
        for(int i=0;i<num.length;i++) {
            for(int j=i+1;j<num.length;j++) {
                if(num[i] > num[j]) {
                    menor = num[i];
                    num[i] = num[j];
                    num[j] = menor;
                }
            }
        }
        System.out.println("O menor numero �: " + num[0]);
    }
}






