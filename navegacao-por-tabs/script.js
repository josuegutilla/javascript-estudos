const lista = document.querySelectorAll('.js-tablista li');
const descricao = document.querySelectorAll('.js-tabdescricao section');

if(lista.length && descricao.length) {
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