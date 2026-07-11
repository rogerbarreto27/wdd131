// Obtém o ano atual
const currentYear = new Date().getFullYear();

// Insere o ano no elemento com id="anoatual"
document.getElementById("anoatual").textContent = currentYear;

// Insere a data da última modificação da página
document.getElementById("ultimaModificacao").textContent =
  "Última Modificação: " + document.lastModified;

// Adiciona funcionalidade ao botão de menu //
const menu = document.querySelector("#menu");
const navegacao = document.querySelector(".navegacao");
const titulo = document.querySelector("header nav h1");

menu.addEventListener("click", () => {
  navegacao.classList.toggle("open");
  menu.classList.toggle("open");
  titulo.style.display = titulo.style.display === "none" ? "block" : "none";
});
