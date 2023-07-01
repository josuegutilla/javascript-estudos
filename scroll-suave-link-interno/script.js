function initTabNAv() {
  const lista = document.querySelectorAll('.js-tablista li');
  const descricao = document.querySelectorAll('.js-tabdescricao section');

  if (lista.length && descricao.length) {
    descricao[0].classList.add('ativo');

    function ativarDescricao(index) {
      descricao.forEach((item) => {
        item.classList.remove('ativo');
      });
      descricao[index].classList.add('ativo');
    };

    lista.forEach((img, index) => {
      img.addEventListener('click', () => {
        ativarDescricao(index);
      });
    });
  }
}
initTabNAv();

//accordion-list
function initAccordion() {
  const termos = document.querySelectorAll('.js-accordion dt');
  const ativoClasse = 'ativo';

  if (termos.length) {
    termos[0].classList.add(ativoClasse);
    termos[0].nextElementSibling.classList.add(ativoClasse);

    function ativarDescricao() {
      this.nextElementSibling.classList.toggle(ativoClasse); //selecionando o segundo elemento e add classe ativo
      this.classList.toggle(ativoClasse);
    };

    termos.forEach((termo) => {
      termo.addEventListener('click', ativarDescricao);
    });
  };
};
initAccordion();


//scroll suave links internos:
function initScrollSuave() {
  const links = document.querySelectorAll('.js-menu a[href^="#"]');

  if(links.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href'); //pegando o href do link que foi clicado => "#faq".
      const section = document.querySelector(href); //selecionando a seção pelo id => #faq, passando o href do link.
      section.scrollIntoView({ //efeito de scroll suave.
        behavior: 'smooth',
        block: 'start',
      });
    };

    links.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  };
};
initScrollSuave();