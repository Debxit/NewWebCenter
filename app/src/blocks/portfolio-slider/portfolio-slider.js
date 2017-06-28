/* Слайдер в портфолио */
var slickVar = {
	infinite: false,
	dots: true,
	arrows: false,
	dotsClass: 'portfolio__dots',
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	customPaging: function (slider, i) {
		//   var thumb = $(slider.$slides[i]).data('thumb');
		//   return '<a><img src="'+thumb+'"></a>';
		return '<div class="portfolio-nav-item"> </div>';
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
		$('.portfolio-slider').slick(slickVar);
	} else {
		$('.portfolio-slider').slick('unslick');
	}
}


$('.portfolio-slider').mousewheel(function (e) {
	e.preventDefault();

	if (e.deltaY < 0) {
		$(this).slick('slickNext');
	}
	else {
		$(this).slick('slickPrev');
	}
});

/* ========== */
