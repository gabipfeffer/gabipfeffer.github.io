const menuBtn = document.querySelector('.nav_btn');
const menu = document.querySelector('nav');
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







menuBtn.addEventListener('click', function(){
    menu.classList.toggle('visible');
});

window.addEventListener('scroll', trancarNav);
