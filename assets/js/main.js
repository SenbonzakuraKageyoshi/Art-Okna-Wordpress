window.addEventListener('DOMContentLoaded', () => {
    const menuButtonOpen = document.querySelector('.menu-icon.open'),
    menuButtonClose = document.querySelector('.menu-icon.close'),
    menu = document.querySelector('.header__nav.responsive')

    const openMenu = () => {
        menu.classList.add('active');
    };

    const closeMenu = () => {
        menu.classList.remove('active');
    };

    menuButtonOpen.addEventListener('click', () => openMenu());
    menuButtonClose.addEventListener('click', () => closeMenu());
});