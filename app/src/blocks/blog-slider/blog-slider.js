/* Слайдер блога */
$('.blog-slider').slick({
    dotsClass: 'blog-slider__dots slick-custom-dots',
    prevArrow: '<div class="blog-slider__prev"></div>',
    nextArrow: '<div class="blog-slider__next"></div>',
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $(".blog-slider-wrap"),
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                adaptiveHeight: true,
                arrows: false
            }
        }
    ]
});
/* ========== */
