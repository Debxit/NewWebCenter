
/* set pages counter*/
$('.feedbacks__slider').on('init', function (event,slick) {
    var all = slick.slideCount;
    // if (all < 10) {
    //     all = '0' + all;
    // }
    console.log('init');
    console.log(all);
    $('.feedbacks__pages .pages__all').html(all);
});


$('.feedbacks__slider').slick({
    dotsClass: 'feedbacks__dots slick-custom-dots',
    // prevArrow: '<div class="feedbacks__prev"></div>',
    // nextArrow: '<div class="feedbacks__next"></div>',
    autoplay: true,
    autoplaySpeed: 10000,
    mobileFirst: true,
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1

});

/* change pages counter*/
$('.feedbacks__slider').on('afterChange', function (event, slick, currentSlide) {
    var current = currentSlide +1;
    if (current < 10) {
        current = '0' + current;
    }
    $('.feedbacks__pages .pages__current').html(current);
});