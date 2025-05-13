document.addEventListener('DOMContentLoaded', () => {

    const burgerMenu = document.querySelector('.header__menu');
    const body = document.body;
    const searchIcon = document.querySelector('.search-item');
    const headerSearch = document.querySelector('.header__search');
    const headerSearchCover = document.querySelector('.header .cover');
    const menuList = document.querySelector('.header__inner-bottom');


    burgerMenu.addEventListener('click', () => {
        body.classList.toggle('active');
        headerSearch.classList.remove('active');

    });

    searchIcon.addEventListener('click', () => {
        headerSearch.classList.toggle('active');
        burgerMenu.classList.add('active');
        body.classList.remove('active');
        headerSearchCover.classList.add('display');
    });

    body.addEventListener('click', (e) => {
        const target = e.target;
        if (!burgerMenu.contains(target) && !menuList.contains(target)) {
            body.classList.remove('active');
        }

        if (headerSearchCover.contains(target)) {
            headerSearchCover.classList.remove('display');
            headerSearch.classList.toggle('active');

        }

    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 649) {
            headerSearchCover.classList.remove('display');
            headerSearch.classList.remove('active');
        }
    });



});