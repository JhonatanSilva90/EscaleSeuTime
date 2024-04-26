// Criando uma div com o id "campinho"
var campinhoDiv = document.createElement("div");
campinhoDiv.id = "campinho";
campinhoDiv.style.position = "relative";
// Criando um elemento img (capinho)
var imgElement = document.createElement("img");
// Definindo o atributo src com o caminho da imagem
imgElement.src = "/images/campinho-sem-borda.svg";
// Adicionando o elemento img à div com o id="campinho"
campinhoDiv.appendChild(imgElement);
// Referência ao elemento antes do qual queremos inserir o campinhoDiv
var referenceNode = document.getElementById("main").firstChild;
// Inserir o campinhoDiv antes do referenceNode
document.getElementById("main").insertBefore(campinhoDiv, referenceNode);

// ----------------------------------------------------------------
// Função para capturar os valores dos inputs
// Variáveis para rastrear se as informações foram escolhidas
var esquemaEscolhido = false;
var tecnicoEscolhido = false;
var jogadoresEscolhidos = 0;

// Função para capturar os valores dos inputs e exibi-los na tela
function capturarValoresInputs() {
  // Capturando os valores dos inputs
  var esquema = document.getElementById("esquema").value;
  var nomeJogador = document.getElementById("nomeJogador").value;
  var numeroJogador = document.getElementById("numeroJogador").value;
  var posicao = document.getElementById("posicao").value;
  var tecnico = document.getElementById("tecnico").value;

  // Exibindo os valores na console
  // console.log("Esquema Tático:", esquema);
  // console.log("Nome do Jogador:", nomeJogador);
  // console.log("Número do Jogador:", numeroJogador);
  // console.log("Posição:", posicao);
  // console.log("Nome do Técnico:", tecnico);

  // Criando divs separadas para exibir as informações
  if (!esquemaEscolhido) {
    var esquemaDiv = document.createElement("div");
    esquemaDiv.textContent = "Esquema Tático: " + esquema;
    campinhoDiv.appendChild(esquemaDiv);
    esquemaEscolhido = true;
  }

  if (!tecnicoEscolhido) {
    var tecnicoDiv = document.createElement("div");
    tecnicoDiv.textContent = "Técnico: " + tecnico;
    campinhoDiv.appendChild(tecnicoDiv);
    tecnicoEscolhido = true;
  }

  if (jogadoresEscolhidos < 11) {
    var jogadorDiv = document.createElement("div");
    jogadorDiv.textContent =
      "Nome: " +
      nomeJogador +
      ", Número: " +
      numeroJogador +
      ", Posição: " +
      posicao;
    campinhoDiv.appendChild(jogadorDiv);
    jogadoresEscolhidos++;
  }
}
// Adicionando um evento de clique ao botão "Adicionar"
document.querySelector(".btn-add button").addEventListener("click", () => {
  capturarValoresInputs(); // Chamando a função para capturar os valores dos inputs quando o botão é clicado
});
