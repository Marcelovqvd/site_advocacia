
  //O método Element.getBoundingClientRect() 
  //retorna o tamanho de um elemento e sua posição relativa ao viewport.

export default function animaAreaScroll() {
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
}