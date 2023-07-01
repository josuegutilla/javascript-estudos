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

  if(termos.length) {
    termos[0].classList.add(ativoClasse);
    termos[0].nextElementSibling.classList.add(ativoClasse);

    function ativarDescricao() {
      const proxElemento = this.nextElementSibling; //selecionando o segundo elemento
      proxElemento.classList.toggle(ativoClasse);
      this.classList.toggle(ativoClasse);
    };

    termos.forEach((termo) => {
      termo.addEventListener('click', ativarDescricao);
    });
  };
};
initAccordion();