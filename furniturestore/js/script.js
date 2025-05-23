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
        body.classList.add('scroll-remove');
    });

    body.addEventListener('click', (e) => {
        const target = e.target;
        if (!burgerMenu.contains(target) && !menuList.contains(target)) {
            body.classList.remove('active');
        }

        if (headerSearchCover.contains(target)) {
            headerSearchCover.classList.remove('display');
            headerSearch.classList.toggle('active');
            body.classList.remove('scroll-remove');
        }

    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 649) {
            headerSearchCover.classList.remove('display');
            headerSearch.classList.remove('active');
            body.classList.remove('active');
            body.classList.remove('scroll-remove');
        }

        // if (window.innerWidth > window.innerHeight) {
        //     menuList.classList.add('scroll');
        // } else {
        //     menuList.classList.remove('scroll');
        // }
    });

    // window.addEventListener('scroll', () => {
    //     const currentScroll = window.pageYOffset;
    //     console.log(currentScroll);
    //     if (currentScroll > 168) {
    //         menuList.classList.add('fixed');
    //     } 
    //     else {
    //         menuList.classList.remove('fixed');
    //     }
    // });



});