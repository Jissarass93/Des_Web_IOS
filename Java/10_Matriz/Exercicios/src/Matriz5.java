public class Matriz5 {

        public static void main(String[] args) {

            //preenchendo com o n�mero 1 a diagonal na sequ�ncia
            int matriz[][] = {{1, 0, 0, 0, 0}, {0, 1, 0, 0, 0}, {0, 0, 1, 0, 0}, {0, 0, 0, 1, 0}, {0, 0, 0, 0, 1}};

            //Criando fun��o pra percorrer no arraz de elementos e imprimir na tela pro us�ario visulaizar
            for (int i = 0; i < matriz.length; i++) {
                for (int j = 0; j < matriz[i].length; j++) {
                    System.out.print(matriz[i][j] + "\t");
                }
                System.out.println("");
            }
        }
    }

