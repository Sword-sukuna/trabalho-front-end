function log(msg) {
  document.getElementById("console").textContent += msg + "\n";
}

function executarExercicio() {
  document.getElementById("console").textContent = ""; // limpa o "console"

  // Passo 1 – Declarando variáveis
  var nomeCantina = "Cantina da Escola";
  log("Bem-vindo à " + nomeCantina);

  let salgados = 20;
  log("Temos " + salgados + " salgados disponíveis.");

  const precoSalgado = 5;
  log("Cada salgado custa R$" + precoSalgado);

  // Passo 2 – Atualizando valores
  salgados = salgados - 5;
  let totalVendido = 5 * precoSalgado;

  log("Agora restam " + salgados + " salgados.");
  log("A cantina vendeu R$" + totalVendido);

  // Passo 3 – Teste de alteração de const
  try {
    // precoSalgado = 6; // Gera erro
    log("Tentando alterar precoSalgado...");
    Object.defineProperty(window, "precoSalgado", { value: 6 }); // simula erro
  } catch (e) {
    log("Erro ao tentar alterar precoSalgado: Constantes não podem ser alteradas.");
  }

  // Teste com var e let em blocos
  if (true) {
    var testeVar = "Sou var";
    let testeLet = "Sou let";

    log("Dentro do bloco:");
    log("testeVar: " + testeVar); // funciona
    log("testeLet: " + testeLet); // funciona
  }

  log("Fora do bloco:");
  log("testeVar: " + testeVar); // funciona fora do bloco (escopo global)
  try {
    log("testeLet: " + testeLet); // ERRO: let não está definido fora do bloco
  } catch (e) {
    log("Erro ao acessar testeLet fora do bloco: " + e.message);
  }

  // Explicações finais
  log("\nResumo:");
  log("- 'var' é global e escapa do bloco.");
  log("- 'let' respeita o escopo do bloco.");
  log("- 'const' é constante e não pode ser reatribuído.");
}