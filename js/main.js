const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

let homeSwp = new Swiper('.home .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    initialSlide: 3,
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.home .swp_pagination',
        clickable: true,
    }
})

let resultatSwp = new Swiper('.resultat .swiper', {
    slidesPerView: 1,
    spaceBetween: 35,
    navigation: {
        nextEl: '.resultat .swp_btn__next',
        prevEl: '.resultat .swp_btn__prev'
    }
})

const items = document.querySelectorAll('.faq__questions_item');

items.forEach((item) => {
    const header = item.querySelector('h3');
    const content = item.querySelector('.faq__questions_item__body');

    header.addEventListener('click', () => {
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
        header.classList.toggle('active')
    });
});

let reviewSwp = new Swiper('.review .swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.review .swp_btn__next',
        prevEl: '.review .swp_btn__prev'
    }
})

let reviewSwp1 = new Swiper('.trust .swp-1', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 7000,
    loop: true,
    autoplay: {
        delay: 0,
        // disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    allowTouchMove: false,
})

let reviewSwp2 = new Swiper('.trust .swp-2', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 8000,
    loop: true,
    autoplay: {
        delay: 0,
        reverseDirection: true,
        disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    allowTouchMove: false,
})

let bars = document.querySelector('.header__bars'),
    mobileMenu = document.querySelector('.mobile_menu'),
    moibleMenuClose = document.querySelector('.mobile_menu__head button');

bars.onclick = () => {
    mobileMenu.classList.add('active');
    bodyHidden();
}

moibleMenuClose.onclick = () => {
    mobileMenu.classList.remove('active');
    bodyVisible();
}