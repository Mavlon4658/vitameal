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
    slidesPerView: 1.30,
    navigation: {
        nextEl: '.review .swp_btn__next',
        prevEl: '.review .swp_btn__prev'
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        993: {
            slidesPerView: 4,
        },
    },
})

let reviewSwp1 = new Swiper('.trust .swp-1', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    speed: 7000,
    loop: true,
    autoplay: {
        delay: 0,
        // disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    allowTouchMove: false,
    breakpoints: {
        993: {
            spaceBetween: 30,
        },
    },
})

let reviewSwp2 = new Swiper('.trust .swp-2', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    speed: 8000,
    loop: true,
    autoplay: {
        delay: 0,
        reverseDirection: true,
        disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    allowTouchMove: false,
    breakpoints: {
        993: {
            spaceBetween: 30,
        },
    },
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

let requestModal = document.querySelector('.request_modal'),
    requestModalOpen = document.querySelectorAll('.request_modal__open'),
    requestModalClose = document.querySelector('.request_modal__close');

requestModalOpen.forEach(el => {
    el.onclick = e => {
        e.preventDefault();
        requestModal.classList.add('active');
        bodyHidden();
    }
});

requestModalClose.onclick = () => {
    requestModal.classList.remove('active');
    bodyVisible();
}

let calculate = document.querySelector('.calculate_modal'),
    calculateOpen = document.querySelectorAll('.calculate_modal__open'),
    calculateClose = document.querySelector('.calculate_modal__close');

calculateOpen.forEach(el => {
    el.onclick = e => {
        e.preventDefault();
        calculate.classList.add('active');
        bodyHidden();
    }
})

calculateClose.onclick = () => {
    calculate.classList.remove('active');
    bodyVisible();
}