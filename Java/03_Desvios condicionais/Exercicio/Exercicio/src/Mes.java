import java.util.Scanner;

public class Mes {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite um mes : ");
        String mesDigitado = entrada.next();

        String[] mesesOutono = {"Abril", "Maio", "Junho"};
        String[] mesesPrimavera = {"Outubro", "Novembro", "Dezembro"};
        String[] mesesVerao = {"Janeiro", "Fevereiro", "Marco"};
        String[] mesesInverno = {"Julho", "Agosto", "Setembro"};

        for (int i = 0; i < 3; i++) {
            if (mesDigitado.equalsIgnoreCase(mesesOutono[i])) {
                System.out.println("O mes " + mesDigitado + " pertence ao Outono.");

            } else if (mesDigitado.equalsIgnoreCase(mesesPrimavera[i])) {
                System.out.println("O mes " + mesDigitado + " pertence ao Primavera.");

            } else if (mesDigitado.equalsIgnoreCase(mesesVerao[i])) {
                System.out.println("O mes " + mesDigitado + " pertence ao Verao.");

            } else if (mesDigitado.equalsIgnoreCase(mesesInverno[i])) {
                System.out.println("O mes " + mesDigitado + " pertence ao Inverno.");
            } else
                System.out.println("Mes invalido !!");
            break;
        }
        entrada.close();
    }
}




