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
    const loginOverlay = document.querySelector('.header .login__overlay');

    const headerLogin = document.querySelector('.header__login');


    const loginForm = document.querySelector('.header .login');

    const authForm = document.querySelector('.login form');
    const loginInput = document.querySelector('.header .login form .login__wrap input');
    const passInput = document.querySelector('.header .login form .pass__wrap input');

    const usernameErrMsg = document.querySelector('.header .login form .form__user .msg');
    const passErrMsg = document.querySelector('.header .login form .form__password .msg');

    const showPassIcon = document.querySelector('.header .login form .pass__wrap .fa-eye');
    const loginFormClose = document.querySelector('.header .login .login__top svg');


    showPassIcon.addEventListener('click', () => {
        const isPassword = passInput.type === 'password';
        passInput.type = isPassword ? 'text' : 'password';
    });

    const emailRegex = /^(?:[a-zA-Z0-9._-]{3,20}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        const loginVal = loginInput.value.trim();
        const passVal = passInput.value.trim();
        if (!loginVal || !emailRegex.test(loginVal)) {
            usernameErrMsg.textContent = 'Please enter your valid username or email';
            loginInput.focus();
            valid = false;
            loginInput.style.outline = '1px solid tomato';
            // console.log('false');
        } else {
            usernameErrMsg.textContent = '';
           // loginInput.style.outline = '';
        }

        if (!passVal || !passwordRegex.test(passVal)) {
            passErrMsg.textContent = 'Please enter a valid password';
            if (valid) passInput.focus();
            valid = false;
            passInput.style.outline = '1px solid tomato';
        } else {
            passErrMsg.textContent = '';    
           // passInput.style.outline = '';

        }

        if (valid) {
            authForm.submit();
        }
    });

    loginInput.addEventListener('input', () => {
        if (loginInput.value.trim()) {
            usernameErrMsg.textContent = '';
            loginInput.style.outline = '1px solid #00adee';
        } else {
            loginInput.style.outline = '1px solid tomato';
            usernameErrMsg.textContent = 'Please enter your username';
        }
    });

    passInput.addEventListener('input', () => {
        if (passInput.value.trim()) {
            passErrMsg.textContent = '';
            passInput.style.outline = '1px solid #00adee';
        } else {
            passInput.style.outline = '1px solid tomato';
            passErrMsg.textContent = 'Please enter your password';
        }
    });


    
    

    burgerMenu.addEventListener('click', () => {
        body.classList.toggle('active');
        headerSearch.classList.remove('active');
    });

    searchIcon.addEventListener('click', () => {
        headerSearch.classList.toggle('active');
        burgerMenu.classList.add('active');
        body.classList.remove('active');
        headerSearchCover.classList.add('display');
        body.classList.add('lock');
    });

    body.addEventListener('click', (e) => {
        const target = e.target;
        if (!burgerMenu.contains(target) && !menuList.contains(target) && body.classList.contains('active')) {
            body.classList.remove('active');
            //console.log('1');
        }

        if (headerSearchCover.contains(target)) {
            headerSearchCover.classList.remove('display');
            headerSearch.classList.toggle('active');
            body.classList.remove('lock');
            //console.log('2');
        }

        if (furnitureLight.contains(target)) {
            furnitureLight.classList.toggle('light');
            //console.log('3');
        }


        if (shoppingPrice.contains(target) || shoppingCart.contains(target)) {
            purchase.classList.add('open');
            purchase.classList.remove('close');
            overlay.classList.add('show');
            body.classList.add('lock');
            //console.log('4');
        }

        if (purchaseClose.contains(target)) {
            purchase.classList.add('close');
            purchase.classList.remove('open');
            overlay.classList.remove('show');
            body.classList.remove('lock');
            //console.log('5');
        }

        if (purchase.classList.contains('open') && !purchase.contains(target) && overlay.contains(target)) {
            purchase.classList.remove('open');
            overlay.classList.remove('show');
            body.classList.remove('lock');
            //console.log('6');
        }

        if (window.innerWidth > 768) {
            if (headerLogin.contains(target)) {
                loginForm.classList.toggle('show');

            }

            if (loginFormClose.contains(target)) {
                loginForm.classList.remove('show');

                usernameErrMsg.textContent = '';
                passErrMsg.textContent = '';
                loginInput.value = '';
                passInput.value = '';
                loginInput.style.outline = 'none';
                passInput.style.outline = 'none';

            }
        }


        if (window.innerWidth < 769) {
            if (headerLogin.contains(target)) {
                if (loginForm.classList.contains('show')) {
                    loginForm.classList.remove('show');
                }
                loginForm.classList.toggle('open');
                loginOverlay.classList.add('show');
                body.classList.add('lock');
            }


            if (loginFormClose.contains(target)) {
                loginForm.classList.remove('open');
                loginOverlay.classList.remove('show');
                body.classList.remove('lock');

                usernameErrMsg.textContent = '';
                passErrMsg.textContent = '';
                loginInput.value = '';
                passInput.value = '';
                loginInput.style.outline = 'none';
                passInput.style.outline = 'none';
            }

            if (loginForm.classList.contains('open') && !loginForm.contains(target) && loginOverlay.contains(target)) {
                loginForm.classList.remove('open');
                loginOverlay.classList.remove('show');
                body.classList.remove('lock');
            }
        }



        if (loginForm.classList.contains('show') && !loginForm.contains(target) && !headerLogin.contains(target)) {
            loginForm.classList.remove('show');
            // console.log('closed');
        }

    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 649) {
            headerSearchCover.classList.remove('display');
            headerSearch.classList.remove('active');
            body.classList.remove('active');
            body.classList.remove('lock');


        }

        if (window.innerWidth > 768) {
            loginForm.classList.remove('open');
            loginOverlay.classList.remove('show');
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