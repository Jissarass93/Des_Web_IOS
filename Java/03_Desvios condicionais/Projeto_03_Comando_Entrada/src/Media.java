import java.util.Scanner;

public class Media {

    public static void main(String[] args) {
        Scanner nome = new Scanner(System.in);
        String aluno;
        System.out.println("digite nome do aluno");
        aluno = nome.nextLine();


        System.out.println("digite suas notas");
        double nota1 = nome.nextDouble();
        double nota2 = nome.nextDouble();
        double media = (nota1 + nota2) / 2;

        System.out.println(aluno + "sua média é :" + media);
        nome.close();
    }
}
