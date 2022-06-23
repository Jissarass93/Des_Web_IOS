public class Numeros {
    public static void main(String[] args) {
        int numero = 100;

        while (numero <= 200) {
            System.out.print(numero + " ");
            if (numero % 30 == 0) System.out.println("");
            numero++;
        }
    }
}
