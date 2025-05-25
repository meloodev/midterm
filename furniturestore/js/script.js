document.addEventListener('DOMContentLoaded', () => {

    const burgerMenu = document.querySelector('.header__menu');
    const body = document.body;
    const searchIcon = document.querySelector('.search-item');
    const headerSearch = document.querySelector('.header__search');
    const headerSearchCover = document.querySelector('.header .cover');
    const menuList = document.querySelector('.header__inner-bottom');
    const furnitureLight = document.querySelector('.furniture__light');


    const shoppingPrice = document.querySelector('.shopping__price');
    const shoppingCart = document.querySelector('.header .cart');

    const purchase = document.querySelector('.header .purchase');
    const purchaseClose = document.querySelector('.header .purchase__close');
    const overlay = document.querySelector('.header .overlay');





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

        if (furnitureLight.contains(target)) {
            furnitureLight.classList.toggle('light');
        }


        if (shoppingPrice.contains(target) || shoppingCart.contains(target)) {
            purchase.classList.add('open');
            purchase.classList.remove('close');
            overlay.classList.add('show');
            body.classList.add('by-scroll');
        }

        if (purchaseClose.contains(target)) {
            purchase.classList.add('close');
            purchase.classList.remove('open');
            overlay.classList.remove('show');
            body.classList.remove('by-scroll');
        }

        if (!purchase.contains(target) && !shoppingPrice.contains(target) && !shoppingCart.contains(target) &&  purchase.classList.contains('open')) {
            purchase.classList.remove('open');
            overlay.classList.remove('show');
            body.classList.remove('by-scroll');
            console.log('df');
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