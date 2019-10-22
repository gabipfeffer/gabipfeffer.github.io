var botonMenu = document.querySelector('.nav__btn');
var mostrarMenu = document.querySelector('header');

botonMenu.addEventListener('click', function(){
    mostrarMenu.classList.toggle('headerAmpliado');
});