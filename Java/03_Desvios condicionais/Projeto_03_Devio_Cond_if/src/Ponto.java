import java.util.Scanner;

public class Ponto {
    public static void main(String[] args) {
        Scanner contagem = new Scanner(System.in);
        String jogador;
        int pontos = 0;
        System.out.println("Coloque o nome do jogador");
        jogador = contagem.nextLine();


         System.out.println("Digite a quantidade de pontos");
          pontos = contagem.nextInt();

          if (pontos >= 1000){
              System.out.println("você passou para o proximo nível");
          }
          contagem.close();
    }
}

