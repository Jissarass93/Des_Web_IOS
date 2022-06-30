public class StringsTeste3 {
    public static void main(String[] args) {
        String txt1 = "Ola aa Pessoal aa do aa IOS";
        String txt2 = "";
        String txt3 = " Ola mundo! ";

        // Verifica se a string está vazia
        System.out.println("String txt1 está vazia? " + txt1.isEmpty());
        System.out.println("String txt2 está vazia? " + txt2.isEmpty());

         System.out.println("Última posiçõa do aa: " + txt1.lastIndexOf("aa"));//21

         // Substituir algo na string
         String txt4 = txt1.replace('a', 'x');//troca o conteudo da string.
         System.out.println(txt4);

         // Retirar espaços no início e no final
         System.out.println("String original: " + txt3);
         System.out.println("String sem espaços: " + txt3.trim());//retira os espaços em branco
         }
}
