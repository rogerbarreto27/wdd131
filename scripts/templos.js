// Obtém o ano atual
const currentYear = new Date().getFullYear();

// Insere o ano no elemento com id="anoatual"
document.getElementById("anoatual").textContent = currentYear;

// Insere a data da última modificação da página
document.getElementById("ultimaModificacao").textContent =
  "Última Modificação: " + document.lastModified;

const menu = document.querySelector("#menu");
const navegacao = document.querySelector("ul");

menu.addEventListener("click", () => {
  navegacao.classList.toggle("open");
  menu.classList.toggle("open");
});
