function setValueNav() {
  if (window.matchMedia("(max-width: 1200px)").matches) {
    // capturar a dimensão da tela
    const header = document.querySelector("header");
    const heightHeader = header.offsetHeight;
    // capturar a tag para adiocnar o estilo
    const nav = document.querySelector("nav");
    // criar a função para adiocnar o evento
    nav.style.top = `${heightHeader}px`;
  }
}
setValueNav();

function initMenuBurguer() {
  // capturar o botão e a tag nav
  const btnMenu = document.querySelector("#btn-menu");
  const nav = document.querySelector("nav");
  // criar a função do evento
  function handleMenu() {
    nav.classList.toggle("ativo");
    btnMenu.classList.toggle("ativo");
  }
  // criar o evento;
  btnMenu.addEventListener("click", handleMenu);

  //   capturar os links internos
  const linksInternosLike = document.querySelectorAll('nav a[href^="#"');
  const linksInternos = Array.from(linksInternosLike);
  // fazer o forEach
  linksInternos.forEach((link) => {
    link.addEventListener("click", handleLink);
  });
  // adcionar evento de click no link
  function handleLink(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // fechar o menu burguer
    handleMenu();
  }
}
initMenuBurguer();
