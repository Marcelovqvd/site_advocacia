
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




function move() {
  const logo = document.querySelector('.logo img');

  function moveLogo() {
    logo.classList.add('ativo');
  }
  window.addEventListener('load', moveLogo);
}

move();


// _____________________________ //




function moveProfissionais() {
  const profissionais = document.querySelectorAll('.profissionais ul img');
  const imagem = profissionais.getBoundingClientRect().top;
  const partWindow = window.innerHeight * 0.2;
  const sectionVisible = (imagem - partWindow) < 0;
  if(sectionVisible) {  
  profissionais.forEach(profissional => {
    profissional.classList.add('anima');
  })
  } else {
    profissionais.forEach(profissional => {
      profissional.classList.remove('anima');
    })
  };
}

moveProfissionais(); 

window.addEventListener('scroll', moveProfissionais);







