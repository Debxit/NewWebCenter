/* Слайдер в портфолио */
$('.portfolio-slider').slick({
	infinite: false,
	dots: true,
	arrows: false,
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	customPaging: function (slider, i) {
		//  var thumb = $(slider.$slides[i]).data('thumb');
		return '<div class="portfolio-nav-item"> </div>';
	},
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 1
			}
		},
		{
			breakpoint: 768,
			settings: "unslick"
			// settings: {
			//     unslick: true
			// }
		}
	]
});
/* ========== */
