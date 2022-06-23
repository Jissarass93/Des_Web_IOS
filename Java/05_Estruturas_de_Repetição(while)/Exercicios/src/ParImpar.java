public class ParImpar {
    public static void main(String[] args) {
        int contador = 1;


        while (contador <= 10) {
            if (contador % 2 == 0) {
                System.out.println(contador + " Número par!");
            } else {
                System.out.println(contador + " Número ímpar!");

            }
            contador++;
        }
    }
}
