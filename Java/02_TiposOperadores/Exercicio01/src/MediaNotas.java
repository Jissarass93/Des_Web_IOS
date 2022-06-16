public class MediaNotas {
    public static void main(String[] args) {
        float[] notas = {10, 5, 7, 8};
        float media = Media.calcular( notas );//usando a função calcular da classe Media
        System.out.println(media);

        float base = 5;
        float altura = 10;
        float area = Triangulo.area(base,altura);//usando a função área da classe triangulo.
        System.out.println(area);
    }
}
