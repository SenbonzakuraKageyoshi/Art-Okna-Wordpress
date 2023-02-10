window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        breakpoints: {
            1140: {
                slidesPerView: 2,
            },
            
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
    
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