const imgLogo = document.querySelector('#img-logo-main');
const header = document.querySelector('header');
const menu = document.querySelector('open-close-menu');

const checkScroll = () => {
    if (window.scrollY > 250) {
        imgLogo.classList.remove('hidden');
        header.style.height = '60px';
    } else {
        imgLogo.classList.add('hidden');
        header.style.height = '80px';
    }
}
window.addEventListener('scroll', checkScroll)