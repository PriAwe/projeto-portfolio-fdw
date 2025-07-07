// Variáveis dos botões do menu lateral
const nomeMenuLateral = document.querySelector("#nome-menu-lateral");
const btnMenuSobre = document.querySelector("#btn-menu-sobre");
const btnMenuFormacao = document.querySelector("#btn-menu-formacao");
const btnMenuPortfolio = document.querySelector("#btn-menu-portfolio");
const btnMenuContato = document.querySelector("#btn-menu-contato");

// Variáveis dos botões das seções
const divSecaoSobre = document.querySelector("#secao-sobre");
const divSecaoFormacao = document.querySelector("#secao-formacao");
const divSecaoPortfolio = document.querySelector("#secao-portfolio");
const divSecaoContato = document.querySelector("#secao-contato");

// Funções para alterar botão selecionado
function clicaBotaoSobre() {
  // Sobre
  btnMenuSobre.classList.add("selecionado");
  divSecaoSobre.classList.remove("hidden");

  // Formação
  btnMenuFormacao.classList.remove("selecionado");
  divSecaoFormacao.classList.add("hidden");

  // Portfolio
  btnMenuPortfolio.classList.remove("selecionado");
  divSecaoPortfolio.classList.add("hidden");

  // Contato
  btnMenuContato.classList.remove("selecionado");
  divSecaoContato.classList.add("hidden");
}

function clicaBotaoFormacao() {
  // Sobre
  btnMenuSobre.classList.remove("selecionado");
  divSecaoSobre.classList.add("hidden");

  // Formação
  btnMenuFormacao.classList.add("selecionado");
  divSecaoFormacao.classList.remove("hidden");

  // Portfólio
  btnMenuPortfolio.classList.remove("selecionado");
  divSecaoPortfolio.classList.add("hidden");

  // Contato
  btnMenuContato.classList.remove("selecionado");
  divSecaoContato.classList.add("hidden");
}

function clicaBotaoPortfolio() {
  // Sobre
  btnMenuSobre.classList.remove("selecionado");
  divSecaoSobre.classList.add("hidden");

  // Formação
  btnMenuFormacao.classList.remove("selecionado");
  divSecaoFormacao.classList.add("hidden");

  // Portfolio
  btnMenuPortfolio.classList.add("selecionado");
  divSecaoPortfolio.classList.remove("hidden");

  // Contato
  btnMenuContato.classList.remove("selecionado");
  divSecaoContato.classList.add("hidden");
}

function clicaBotaoContato() {
  // Sobre
  btnMenuSobre.classList.remove("selecionado");
  divSecaoSobre.classList.add("hidden");

  // Formação
  btnMenuFormacao.classList.remove("selecionado");
  divSecaoFormacao.classList.add("hidden");

  // Portfolio
  btnMenuPortfolio.classList.remove("selecionado");
  divSecaoPortfolio.classList.add("hidden");

  // Contato
  btnMenuContato.classList.add("selecionado");
  divSecaoContato.classList.remove("hidden");
}

// Padrão ao clicar no nome no menu lateral
// e ir para a seção Sobre
nomeMenuLateral.addEventListener("click", clicaBotaoSobre);

// Quando selecionar botão Sobre:
btnMenuSobre.addEventListener("click", clicaBotaoSobre);

// Quando selecinar botão Formação e Certificados
btnMenuFormacao.addEventListener("click", clicaBotaoFormacao);

// Quando selecionar botão Portfólio
btnMenuPortfolio.addEventListener("click", clicaBotaoPortfolio);

// Quando selecionar botão Contato
btnMenuContato.addEventListener("click", clicaBotaoContato);
