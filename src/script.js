const menu = document.querySelector('.navbar');
const linkMenu = document.querySelectorAll('navbar a');
const topOfMenu = menu.offsetTop;

function trancarNav() {
    if(window.scrollY >= topOfMenu) {
        document.body.style.paddingTop = menu.offsetHeight + 'px';
        menu.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        menu.classList.remove('fixed-nav');
    }
};

menu.addEventListener('click', function(){
    menu.classList.toggle('nav-visible');
})

window.addEventListener('scroll', trancarNav);
