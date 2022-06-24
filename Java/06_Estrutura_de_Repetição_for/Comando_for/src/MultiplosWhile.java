public class MultiplosWhile {
    public static void main(String[] args) {
        int numero = 0;
        int total = 1000;
        int acumulador = 0;

        while(numero < total) {
            System.out.print(numero + " ");
            numero+=2;
            if (numero % 30 == 0) System.out.println("");
            acumulador = acumulador + numero;
        }
    }
}
