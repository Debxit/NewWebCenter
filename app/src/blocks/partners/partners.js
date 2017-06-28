$('.partners').slick({
    autoplay: true,
    autoplaySpeed: 7000,
    // dotsClass: 'customer__dots slick-custom-dots',
    mobileFirst: true,
    // prevArrow: '<div class="customer__prev"></div>',
    // nextArrow: '<div class="customer__next"></div>',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }
    ]
});