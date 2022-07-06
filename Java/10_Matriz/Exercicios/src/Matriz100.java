import java.util.Random;

    public class Matriz100 {
        public static void main(String[] args) {

            int matriz[][] = new int[100][100];
            Random aleatorio = new Random();

            for (int i = 0; i < matriz.length; i++) {
                for (int j = 0; j < matriz[i].length; j++) {
                    matriz[i][j] = aleatorio.nextInt(101);
                    System.out.print(matriz[i][j] + "\t");


                    if (matriz[i][j] % 2 != 0) {
                        matriz[i][j] = -1;

                    } else {
                        matriz[i][j] = 1;
                    }
                }
                System.out.println(" ");
            }

            for (int i = 0; i < matriz.length; i++) {
                for (int j = 0; j < matriz[i].length; j++) {
                    if (matriz[i][j] == -1)
                        System.out.print(matriz[i][j] + "\t");
                    else
                        System.out.print(" " +matriz[i][j] + "\t");
                }
                System.out.println(" ");
            }
        }
    }

