export default function move() {
    const logo = document.querySelector('.logo img');
  
    function moveLogo() {
      logo.classList.add('ativo');
    }
    window.addEventListener('load', moveLogo);
  }
  
  