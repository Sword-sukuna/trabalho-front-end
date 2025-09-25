// Declarações iniciais (Passo 1)
var nomeCantina = "Cantina da Escola";
let salgados = 20;
const precoSalgado = 5;

// Estado derivado
let totalVendido = 0;

// Elementos UI
const nomeCantinaDisplay = document.getElementById('nomeCantinaDisplay');
const salgadosDisplay = document.getElementById('salgadosDisplay');
const precoDisplay = document.getElementById('precoDisplay');
const consoleEl = document.getElementById('console');

// Inicializa UI
function atualizarUI(){
  nomeCantinaDisplay.textContent = nomeCantina;
  salgadosDisplay.textContent = salgados;
  precoDisplay.textContent = 'R$' + precoSalgado;
}

function log(msg){
  // mostra no "console" visual e também usa console.log real
  console.log(msg);
  consoleEl.textContent += '\n' + msg;
  consoleEl.scrollTop = consoleEl.scrollHeight;
}

atualizarUI();
log('Bem-vindo à ' + nomeCantina);
log('Temos ' + salgados + ' salgados disponíveis.');
log('Cada salgado custa R$' + precoSalgado);

// Passo 2 — Atualizando valores: vender 5 salgados
document.getElementById('venderBtn').addEventListener('click', function(){
  // Simula venda de 5 salgados
  const vendidosAgora = 5;

  // Verifica se há saldo suficiente
  if(salgados >= vendidosAgora){
    salgados = salgados - vendidosAgora; // let pode mudar
    totalVendido += vendidosAgora * precoSalgado;

    atualizarUI();
    log('Agora restam ' + salgados + ' salgados.');
    log('A cantina vendeu R$' + (vendidosAgora * precoSalgado) + ' nesta operação.');
    log('Total vendido até agora: R$' + totalVendido);
  } else {
    log('Não há salgados suficientes para vender ' + vendidosAgora + '.');
  }
});

// Teste: tentar mudar const
document.getElementById('tentarMudarConstBtn').addEventListener('click', function(){
  log('\n--- Teste: tentar atribuir a precoSalgado (const) ---');
  try{
    // Isto lançará um TypeError em modo estrito. Em navegadores, atribuir a uma const gera erro.
    // Aqui simulamos para explicar melhor ao usuário:
    precoSalgado = 6; // <-- erro intencional
  } catch (err){
    log('ERRO ao tentar alterar precoSalgado: ' + (err && err.message ? err.message : String(err)));
    log('Conclusão: <const> não pode ser reatribuída.');
  }

  // Também demonstramos que, mesmo que não lance (em casos estranhos), o valor não muda
  log('Valor atual de precoSalgado: R$' + precoSalgado);
});

// Demonstração de escopo: var vs let
document.getElementById('escopoBtn').addEventListener('click', function(){
  log('\n--- Demonstrando escopo de var vs let ---');

  if (true) {
    var testeVar = 'Sou var';
    let testeLet = 'Sou let';
    log('Dentro do bloco: testeVar = ' + testeVar);
    log('Dentro do bloco: testeLet = ' + testeLet);
  }

  // testeVar está disponível aqui (var é função/global-scoped)
  log('Fora do bloco: testeVar = ' + testeVar);

  // testeLet NÃO está disponível aqui; acessar direto causaria ReferenceError.
  try{
    log('Fora do bloco: testeLet = ' + testeLet);
  } catch (err){
    log('Fora do bloco: testeLet -> ERRO (ReferenceError) — let respeita escopo de bloco.');
  }

  log('Conclusão: use <let> para variáveis mutáveis com escopo de bloco, <var> pode vazar o escopo.');
});

// Reset
document.getElementById('resetBtn').addEventListener('click', function(){
  // resetando estado (nomeCantina e precoSalgado permanecem como originalmente declarados)
  nomeCantina = 'Cantina da Escola';
  salgados = 20;
  totalVendido = 0;
  atualizarUI();
  log('\n--- Valores resetados ---');
  log('Temos ' + salgados + ' salgados disponíveis.');
  log('Cada salgado custa R$' + precoSalgado);
});
