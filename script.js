public class Cantina {
    public static void main(String[] args) {
        // Nome da cantina
        String nomeCantina = "Cantina da Escola";
        System.out.println("Bem-vindo à " + nomeCantina);

        // Número de salgados e preço
        int salgados = 20;
        System.out.println("Temos " + salgados + " salgados disponíveis.");

        double precoSalgado = 5.0;
        System.out.println("Cada salgado custa R$" + precoSalgado);

        // Atualizando o número de salgados e calculando a venda
        salgados = salgados - 5;
        double totalVendido = 5 * precoSalgado;

        System.out.println("Agora restam " + salgados + " salgados.");
        System.out.println("A cantina vendeu R$" + totalVendido);

        // Teste de alteração de precoSalgado (não é possível em Java já que precoSalgado é final)
        // precoSalgado = 6; // Isso geraria um erro se fosse final

        // Teste com variáveis de escopo
        if (true) {
            String testeVar = "Sou var (mas em Java não é exatamente assim)"; 
            System.out.println(testeVar); // Funciona dentro do bloco
        }
        
        // Aqui o testeVar não está acessível porque foi declarada dentro do bloco if
        // System.out.println(testeVar); // Isso geraria um erro! TesteVar não existe fora do bloco
    }
}
