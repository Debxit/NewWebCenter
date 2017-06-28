/* Слайдер со списком шаблонов сайтов */
$('.layout-slider').slick({
	autoplay: true,
	autoplaySpeed: 20000,
	dotsClass: 'layout-slider__dots',
	mobileFirst: true,
	prevArrow: '<div class="layout-slider__prev"></div>',
	nextArrow: '<div class="layout-slider__next"></div>',
	rows: 2,
	slidesToShow: 1,
	slidesToScroll: 1,
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
				slidesToScroll: 3,
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				arrows: false,
				dots: true
			}
		}
	]
});
/* ========== */
