import java.util.Scanner;
import java.util.Calendar;
import java.util.Date;

public class Mes {
    public static void main(String[] args) {


        int dia, mes;
        int ano = Calendar.getInstance().get(Calendar.YEAR);
        Date data;
        Date out = new Date(ano, 3, 20);
        Date inv = new Date(ano, 6, 21);
        Date pri = new Date(ano, 9, 22);
        Date ver = new Date(ano, 12, 21);

        Scanner teclado = new Scanner(System.in);
        System.out.print("Dia: ");

        dia = teclado.nextInt();

        System.out.print("Mês: ");

        mes = teclado.nextInt();


        try {
            data = new Date(ano, mes, dia);
            if (data.equals(out) || (data.after(out) && data.before(inv))) {
                System.out.println("Outono");
            } else if (data.equals(inv) || (data.after(inv) && data.before(pri))) {
                System.out.println("Inverno");
            } else if (data.equals(pri) || (data.after(pri) && data.before(ver))) {
                System.out.println("Primavera");
            } else {
                System.out.println("Verão");

            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            teclado.close();
        }
    }

}