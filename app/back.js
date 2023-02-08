// Imagens
const pegaImagemNoGit = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
const pegaImagemNoGitShiny = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/"
const pegaTipoNoGit = "img/tipos/"

// Dia da semana
const dia = new Date();
const diaIndex = dia.getDay();
const weekDayArr = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
const getWeekDay = (dayIndexParam) => weekDayArr[dayIndexParam];
let diaAtual = getWeekDay(diaIndex);

// Chama Api
function buscaNaApi(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

// Api Moeda
function APIMoeda() {
  dataMoeda = buscaNaApi(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL"
  );
  moeda = JSON.parse(dataMoeda);
}
APIMoeda();

// Modo noturno
const mudaBotao = document.querySelector("#botao");

function aplicaTema() {
  document.body.classList.toggle("dark");
}

// Carrega tema salvo
function carregaTema() {
  const modoNoturno = localStorage.getItem("dark");

  if (modoNoturno) {
    aplicaTema();
  }
}

// Muda para modo noturno
mudaBotao.addEventListener("click", function () {
  aplicaTema();

  // Salva ou remove tema
  localStorage.removeItem("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});
carregaTema();

// Pega botão
var checkbox = document.getElementById("botao");

// Verifica posição do botão
var botaoValorSalvo = localStorage.getItem("botaoValor");

// aplica o valor do botão
checkbox.checked = botaoValorSalvo == "true";

// Aplica posição
checkbox.addEventListener("change", function () {
  localStorage.setItem("botaoValor", checkbox.checked);
});

// Desativa a animação do botão
const animaBotao = document.querySelector(".label .circulo");
animaBotao.style.transition = "none";

// Reativa a animação do botão
setTimeout(() => {
  animaBotao.style.transition = "transform .2s";
}, 201);
