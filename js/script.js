
function initScrollSuave() {

  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection);
  });

}
initScrollSuave();




// _____________________________ //
//animação do logo

function move() {
  const logo = document.querySelector('.logo img');

  function moveLogo() {
    logo.classList.add('ativo');
  }
  window.addEventListener('load', moveLogo);
}

move();





// _____________________________ //

//anima seção áreas de atuação

  //O método Element.getBoundingClientRect() 
  //retorna o tamanho de um elemento e sua posição relativa ao viewport.


const section = document.querySelector('.areas');

function animaScroll() {
  const sectionTop = section.getBoundingClientRect().top;
  console.log(sectionTop);
  if(sectionTop < 1) {
    section.classList.add('anima');
  } else {
    section.classList.remove('anima');
  }
}


animaScroll();

window.addEventListener('scroll', animaScroll);








