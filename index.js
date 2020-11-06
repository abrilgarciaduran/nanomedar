const imgLogo = document.querySelector('#img-logo-main');
const header = document.querySelector('header');
const menu = document.querySelector('.links');
const openCloseMenuContainer = document.querySelector('.open-close-menu-container');
const openCloseMenuImg = document.querySelector('.open-close-menu');

const checkScroll = () => {
    if (window.scrollY > 250) {
        imgLogo.classList.remove('hidden');
        header.style.height = '60px';
    } else {
        imgLogo.classList.add('hidden');
        header.style.height = '80px';
    }
}
const displayMenu = () => {
    if (openCloseMenuImg.src.includes('open')) {
        openCloseMenuImg.src = openCloseMenuImg.src.replace('open', 'close')
        menu.style.display = 'flex';
    } else {
        openCloseMenuImg.src = openCloseMenuImg.src.replace('close', 'open')
        menu.style.display = 'none';
    }
}
window.addEventListener('scroll', checkScroll);
openCloseMenuContainer.addEventListener('click', displayMenu)