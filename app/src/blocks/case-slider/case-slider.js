/* Слайдер в портфолио */
var slickVar = {
	infinite: false,
	dots: true,
	arrows: false,
	dotsClass: 'case-slider__dots',
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	customPaging: function (slider, i) {
		return '<div class="case-slider__dot"> </div>';
	},
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 1
			}
		}
	]
};

var slickToggle;

if (window.innerWidth > 767) {
	runSlick(true);
	slickToggle = false;
} else {
	slickToggle = true;
}

$(window).on('resize', function() {

	if (window.innerWidth > 767) {
		if (slickToggle) {
			runSlick(true);
			slickToggle = false;
		}
	} else {
		if (!slickToggle) {
			runSlick(false);
			slickToggle = true;
		}
	}
});

function runSlick(toggle) {
	if (toggle) {
		$('.case-slider').slick(slickVar);
	} else {
		$('.case-slider').slick('unslick');
	}
}


$('.case-slider').on('mousewheel', function (e) {

	if (hasScroll('Height')) return;

	e.preventDefault();

	if (e.deltaY < 0) {
		$(this).slick('slickNext');
	} else {
		$(this).slick('slickPrev');
	}
});

/* ========== */
