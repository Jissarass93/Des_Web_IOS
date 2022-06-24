
public class Multiplos {
    public static void main(String[] args) {

        int numero;
        int valor = 0;

        for (numero = 0; numero < 1000; numero += 2) {
            System.out.print(numero + " ");
            if (numero % 40 == 0) {
                System.out.println("");
                valor = valor + numero;
            }
        }
    }
}
