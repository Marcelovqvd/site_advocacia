import initScrollSuave from './modules/scroll_suave.js';
import move from './modules/move_logo.js';
import animaAreaScroll from './modules/anima_areas_atuacao.js';

initScrollSuave();
move();
animaAreaScroll();


const teste = document.querySelector('#escritorio');
console.log(teste.dataset);


const agora = new Date();
console.log(agora.getDay()); 
