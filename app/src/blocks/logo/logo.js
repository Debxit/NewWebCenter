/* Откат слайдера при клике на лого (на главной) */
$(document).on('click', '.full-logo', function () {

	if ($('.page-slider').length) {
		$('.page-slider').slick('slickGoTo', 0);
		return false;
	}
});
/* ========== */
