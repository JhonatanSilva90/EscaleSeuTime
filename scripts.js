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
  button.classList = "addJogador";
  button.style.position = "absolute";
  button.style.top = `${top}px`;
  button.style.left = `${left}px`;
  button.style.height = "50px";
  button.style.width = "50px";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.background = "transparent";

  // Para adicionar um evento de click ao botão, para abrir a caixa de nome e número.
  button.addEventListener("click", openPlayerDialog);
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

// Função para resetar o campo e o input
function resetField() {
  const campinho = document.getElementById("campinho");
  // Remove todos os elementos dentro do campo
  campinho.innerHTML = "";
  const esquemaInput = document.getElementById("esquemaInput");
  // Limpa o conteúdo do input
  esquemaInput.value = "";
  // Limpa a caixa de dialogo com nome e número do jogador
  const limparAddDadosJogador = document.querySelector(".dialog");
  if (dialog) {
    dialog.remove();
  }
}

// Adiciona um evento de clique ao botão de reset
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetField);

// Criação da caixa de diálogo que serão inseridas as informações de nome e número dos jogadores
function openPlayerDialog() {
  const dialog = document.createElement("div");
  dialog.setAttribute("id", "dialog");
  dialog.style.position = "fixed";
  dialog.style.top = "50%";
  dialog.style.left = "50%";
  dialog.style.transform = "translate(-50%, -50%)";
  dialog.style.width = "260px";
  dialog.style.height = "170px";
  dialog.style.padding = "8px";
  dialog.style.borderRadius = "5px";
  dialog.style.background = "#fff";
  dialog.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
  dialog.style.textAlign = "center";

  // Título da caixa de diálogo
  const title = document.createElement("h3");
  title.textContent = "Adicionar Jogador";
  dialog.appendChild(title);

  // Campo "nome"
  const nomeInput = document.createElement("input");
  nomeInput.setAttribute("type", "text");
  nomeInput.setAttribute("placeholder", "Nome");
  nomeInput.setAttribute("id", "nomeJogador");
  nomeInput.style.height = "32px";
  nomeInput.style.width = "180px";
  nomeInput.style.border = "1px solid black";
  nomeInput.style.borderRadius = "8px";
  nomeInput.style.textAlign = "center";
  nomeInput.style.fontSize = "16px";
  nomeInput.style.marginTop = "12px";

  // Campo "número"
  const numeroInput = document.createElement("input");
  numeroInput.setAttribute("type", "text");
  numeroInput.setAttribute("placeholder", "Número de 1 a 99");
  numeroInput.setAttribute("id", "numeroJogador");
  numeroInput.style.height = "32px";
  numeroInput.style.width = "180px";
  numeroInput.style.border = "1px solid black";
  numeroInput.style.borderRadius = "8px";
  numeroInput.style.textAlign = "center";
  numeroInput.style.fontSize = "16px";
  numeroInput.style.marginTop = "12px";
  numeroInput.addEventListener("input", function (event) {
    // Obtém o valor atual do input
    let valor = event.target.value;

    // Verificando se o valor não está vazio e contém apenas números
    if (valor !== "" && /^\d+$/.test(valor)) {
      let numero = valor;
      // Verificando se o número está dentro do intervalo de 1 a 99
      if (numero < 1 || numero > 99) {
        alert("Por favor, insira um número entre 1 e 99.");
        // Removendo o último caractere do valor
        event.target.value = "";
      }
    } else if (valor !== "") {
      // Se contém caracteres não numéricos e não está vazio, exibe uma mensagem de aviso
      alert("Por favor, insira apenas números entre 1 e 99.");
      event.target.value = "";
    }
  });

  // Botão para adicionar as informações de nome e número
  const addButton = document.createElement("button");
  addButton.setAttribute("class", "addButton");
  addButton.textContent = "Adicionar";
  addButton.style.backgroundColor = "green";
  addButton.style.borderRadius = "4px";
  addButton.style.border = "none";
  addButton.style.height = "32px";
  addButton.style.width = "90px";
  addButton.style.marginTop = "12px";
  addButton.style.color = "white";
  addButton.style.fontSize = "16px";
  addButton.style.transition = "0.5s";
  // Função para capturar os valores dos inputs e exibi-los na tela
  addButton.addEventListener("click", () => {
    // Capturando os valores dos inputs
    let nomeJogador = document.getElementById("nomeJogador").value;
    // console.log(nomeJogador);
    let numeroJogador = document.getElementById("numeroJogador").value;
    // console.log(numeroJogador);
    // let nomeTecnico = document.getElementById("tecnico").value;
    // Criando condicinais para que os campos nome e número não fiquem vazios
    if (nomeJogador === "") {
      alert("Por favor, preencha o campo de nome.");
      return;
    } else if (nomeJogador.length <= 3) {
      alert("Por favor, insira um nome com mais de 3 caracteres.");
      return;
    }
    if (numeroJogador === "") {
      alert("Por favor, preencha o campo de número.");
      return;
    }
    let numero = parseInt(numeroJogador, 10);
    if (isNaN(numero) || numero < 1 || numero > 99) {
      alert("Por favor, insira um número válido entre 1 e 99.");
      return;
    }

    // Selecionando o botão existente
    const playerButton = document.querySelector(".addJogador");
    // Substituindo a imagem do botão pelos valores inseridos nos inputs
    playerButton.innerHTML = nomeJogador + " - " + numeroJogador;
    // Fechando o diálogo após adicionar o jogador
    document.body.removeChild(dialog);

    // console.log(nomeJogador, numero);
  });

  // Adiciona os campos e o botão à caixa de diálogo
  dialog.appendChild(nomeInput);
  dialog.appendChild(document.createElement("br")); // Quebra de linha para separar os campos
  dialog.appendChild(numeroInput);
  dialog.appendChild(document.createElement("br")); // Quebra de linha para separar os campos
  dialog.appendChild(addButton);

  // Adiciona a caixa de diálogo ao corpo do documento
  document.body.appendChild(dialog);
}
