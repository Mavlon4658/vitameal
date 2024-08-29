let homeSwp = new Swiper('.home .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    // initialSlide: 1,
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