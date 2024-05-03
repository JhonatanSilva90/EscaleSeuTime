// // Criação do elemento header
// var header = document.createElement("header");
// header.setAttribute("id", "header");

// // Aplicando estilos CSS
// header.style.display = "flex";
// header.style.alignItems = "center";
// header.style.justifyContent = "center";
// header.style.padding = "1rem";
// header.style.backgroundColor = "var(--cor-footer)";
// header.style.color = "var(--cor-white)";
// header.style.position = "fixed"; // Adicionando posição fixa para manter no topo
// header.style.width = "100%"; // Definindo a largura como 100%

// // Criação do elemento h1
// var h1 = document.createElement("h1");
// h1.textContent = "Escale seu Time";

// // Adicionar o elemento h1 como filho do elemento header
// header.appendChild(h1);

// // Adicionar o elemento header como primeiro filho da tag body
// document.body.insertBefore(header, document.body.firstChild);

// Criação de arrays com as formações
const formacao442 = [
  {
    id: "Goleiro",
    top: 675,
    left: 260,
  },
  {
    id: "Lateral Direito",
    top: 525,
    left: 450,
  },
  {
    id: "Lateral Esquero",
    top: 525,
    left: 70,
  },

  {
    id: "Zagueiro Direita",
    top: 575,
    left: 355,
  },
  {
    id: "Zagueiro Esquerda",
    top: 575,
    left: 165,
  },
  {
    id: "Volante Direita",
    top: 375,
    left: 355,
  },
  {
    id: "Volante Esquerda",
    top: 375,
    left: 165,
  },
  {
    id: "Meia Direita",
    top: 275,
    left: 450,
  },
  {
    id: "Meia Esquerda",
    top: 275,
    left: 70,
  },

  {
    id: "Atacante Direita",
    top: 120,
    left: 355,
  },
  {
    id: "Atacante Esquerda",
    top: 120,
    left: 165,
  },
  {
    id: "Técnico",
    top: 680,
    left: 500,
  },
];

const formacao433 = [
  {
    id: "Goleiro",
    top: 675,
    left: 260,
  },
  {
    id: "Lateral Direito",
    top: 525,
    left: 450,
  },
  {
    id: "Lateral Esquero",
    top: 525,
    left: 70,
  },

  {
    id: "Zagueiro Direita",
    top: 575,
    left: 355,
  },
  {
    id: "Zagueiro Esquerda",
    top: 575,
    left: 165,
  },
  {
    id: "Volante Direita",
    top: 400,
    left: 350,
  },
  {
    id: "Volante Esquerda",
    top: 400,
    left: 170,
  },
  {
    id: "Meia Atacante",
    top: 250,
    left: 260,
  },
  {
    id: "Atacante Direita",
    top: 120,
    left: 445,
  },
  {
    id: "Atacante Central",
    top: 120,
    left: 260,
  },
  {
    id: "Atacante Esquerda",
    top: 120,
    left: 75,
  },
  {
    id: "Técnico",
    top: 680,
    left: 500,
  },
];
const formacao352 = [
  {
    id: "Goleiro",
    top: 675,
    left: 260,
  },
  {
    id: "Zagueiro Direita",
    top: 575,
    left: 445,
  },
  {
    id: "Zagueiro Central",
    top: 575,
    left: 260,
  },
  {
    id: "Zagueiro Esquerda",
    top: 575,
    left: 75,
  },
  {
    id: "Meia Direita",
    top: 400,
    left: 410,
  },
  {
    id: "Meia Central",
    top: 400,
    left: 260,
  },
  {
    id: "Meia Esquerda",
    top: 400,
    left: 110,
  },
  {
    id: "Ponta Direita",
    top: 275,
    left: 450,
  },
  {
    id: "Ponta Esquerda",
    top: 275,
    left: 70,
  },

  {
    id: "Atacante Direita",
    top: 120,
    left: 355,
  },
  {
    id: "Atacante Esquerda",
    top: 120,
    left: 165,
  },
  {
    id: "Técnico",
    top: 680,
    left: 500,
  },
];

// Função para criar o button do jogador
function createNewPlayerButton(top, left) {
  const imageCampinho = document.createElement("img");
  imageCampinho.src = "/images/plus.png";
  imageCampinho.style.height = "50px";
  const button = document.createElement("button");
  button.appendChild(imageCampinho);
  button.style.position = "absolute";
  button.style.top = `${top}px`;
  button.style.left = `${left}px`;
  button.style.height = "50px";
  button.style.width = "50px";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.background = "transparent";
  return button;
}

// Função para criar o campo
function createField(formacaoSelecionada) {
  const formacaoButtons = formacaoSelecionada.map(({ top, left }) =>
    createNewPlayerButton(top, left)
  );
  const campinho = document.getElementById("campinho");
  formacaoButtons.forEach((element) => campinho.appendChild(element));
}

// Função para definir o esquema tático selecionado
function handleOptionClick(event) {
  if (event.target.value === "4-4-2") {
    createField(formacao442);
  } else if (event.target.value === "4-3-3") {
    createField(formacao433);
  } else if (event.target.value === "3-5-2") {
    createField(formacao352);
  }
}
const esquemaInput = document.getElementById("esquemaInput");
esquemaInput.addEventListener("input", handleOptionClick);

// ----------------------------------------------------------------
// Função para capturar os valores dos inputs
// Variáveis para rastrear se as informações foram escolhidas
let esquemaEscolhido = false;
let tecnicoEscolhido = false;
let jogadoresEscolhidos = 0;

// Função para capturar os valores dos inputs e exibi-los na tela
function capturarValoresInputs() {
  // Capturando os valores dos inputs
  let esquema = document.getElementById("esquema").value;
  let nomeJogador = document.getElementById("nomeJogador").value;
  let numeroJogador = document.getElementById("numeroJogador").value;
  let posicao = document.getElementById("posicao").value;
  let tecnico = document.getElementById("tecnico").value;

  // Exibindo os valores na console
  // console.log("Esquema Tático:", esquema);
  // console.log("Nome do Jogador:", nomeJogador);
  // console.log("Número do Jogador:", numeroJogador);
  // console.log("Posição:", posicao);
  // console.log("Nome do Técnico:", tecnico);

  // Criando divs separadas para exibir as informações
  if (!esquemaEscolhido) {
    let esquemaDiv = document.createElement("div");
    esquemaDiv.textContent = `Esquema Tático: ${esquema}`;
    campinhoDiv.appendChild(esquemaDiv);
    esquemaEscolhido = true;
  }

  if (!tecnicoEscolhido) {
    let tecnicoDiv = document.createElement("div");
    tecnicoDiv.textContent = "Técnico: " + tecnico;
    campinhoDiv.appendChild(tecnicoDiv);
    tecnicoEscolhido = true;
  }

  if (jogadoresEscolhidos < 11) {
    let jogadorDiv = document.createElement("div");
    jogadorDiv.textContent = nomeJogador + numeroJogador + posicao;
    jogadorDiv.classList.add("jogador"); // Adicionando a classe "jogador" ao elemento div para estilização no CSS.
    campinhoDiv.appendChild(jogadorDiv);

    // Adicionando uma classe ao elemento div para exibi-lo em linha
    jogadorDiv.classList.add("jogador-inline");

    jogadoresEscolhidos++;
  }
}
// Adicionando um evento de clique ao botão "Adicionar"
document.querySelector(".btn-add button").addEventListener("click", () => {
  capturarValoresInputs(); // Chamando a função para capturar os valores dos inputs quando o botão é clicado
});

// // Fazendo com o que input do número do jogador aceite apenas números
// Seleciona o input pelo ID
let inputNumero = document.getElementById("numeroJogador");

// Adiciona um listener de evento para o evento "input"
inputNumero.addEventListener("input", function (event) {
  // Obtém o valor atual do input
  let valor = event.target.value;

  // Verificando se o valor não está vazio e contém apenas números
  if (valor !== "" && /^\d+$/.test(valor)) {
    let numero = valor;
    // Verificando se o número está dentro do intervalo de 1 a 99
    if (numero < 1 || numero > 99) {
      alert("Por favor, insira um número entre 1 e 99.");
      // Removendo o último caractere do valor
      event.target.value = valor.slice(0, -1);
    }
  } else if (valor !== "") {
    // Se contém caracteres não numéricos e não está vazio, exibe uma mensagem de aviso
    alert("Por favor, insira apenas números entre 1 e 99.");
  }
});
