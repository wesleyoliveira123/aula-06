let tarefas = [];

const adicionarTarefa = function(tarefa) {
  tarefas.push(tarefa);
};

const listarTarefas = () => {
  console.log("Tarefas:");
  tarefas.forEach((tarefa, indice) => {
    console.log(`${indice}: ${tarefa}`);
  });
};

function modificarTarefa(indice, acao) {
  if (tarefas[indice]) {
    acao(indice);
  } else {
    console.log("Índice inválido!");
  }
}

const removerTarefa = (indice) => {
  tarefas.splice(indice, 1);
  console.log("Tarefa removida com sucesso.");
};

function exibirMenu() {
  let opcao;

  do {
    opcao = prompt("digite 1 pra adicionar tarefa, 2 pra listar, 3 pra remover ou 0 pra sair");

    if (opcao === "1") {
      const novaTarefa = prompt("Digite a tarefa:");
      adicionarTarefa(novaTarefa);
    }

    if (opcao === "2") {
      listarTarefas();
    }

    if (opcao === "3") {
      listarTarefas();
      const indice = parseInt(prompt("Digite o índice da tarefa a remover:"));
      modificarTarefa(indice, removerTarefa);
    }

  } while (opcao !== "0");

  console.log("Programa encerrado.");
}

exibirMenu();
