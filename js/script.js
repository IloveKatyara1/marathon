window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.info'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('info_active');

    });
});