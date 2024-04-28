// Criação do elemento header
var header = document.createElement("header");
header.setAttribute("id", "header");

// Aplicando estilos CSS
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "center";
header.style.padding = "1rem";
header.style.backgroundColor = "var(--cor-footer)";
header.style.color = "var(--cor-white)";
header.style.position = "fixed"; // Adicionando posição fixa para manter no topo
header.style.width = "100%"; // Definindo a largura como 100%

// Criação do elemento h1
var h1 = document.createElement("h1");
h1.textContent = "Escale seu Time";

// Adicionar o elemento h1 como filho do elemento header
header.appendChild(h1);

// Adicionar o elemento header como primeiro filho da tag body
document.body.insertBefore(header, document.body.firstChild);

// Criando uma div com o id "campinho"
let campinhoDiv = document.createElement("div");
campinhoDiv.id = "campinho";
campinhoDiv.style.position = "relative";
// Ajustando a posição em relação à tela
campinhoDiv.style.top = "6rem";
// Criando um elemento img (campinho)
let imgElement = document.createElement("img");
// Definindo o atributo src com o caminho da imagem
imgElement.src = "/images/campinho-sem-borda.svg";
// Adicionando o elemento img à div com o id="campinho"
campinhoDiv.appendChild(imgElement);

// Referência ao elemento antes do qual queremos inserir o campinhoDiv
let referenceNode = document.getElementById("main").firstChild;

// Inserir o campinhoDiv antes do referenceNode
document.getElementById("main").insertBefore(campinhoDiv, referenceNode);

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
