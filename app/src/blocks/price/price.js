/* Блок стоимости */
var
	$price = $('.main__price'), // Блок стоимости
	priceFixed = 'main__price_fixed', // Класс фиксированного блока стоимости
	$priceParent = $price.parent(), // Внешний контейнер блока стоимости
	$priceNext = $price.next(); // Блок рядом с блоком стоимости

setPricePos();

$(window).on('scroll resize', function() {
	setPricePos();
});

function setPricePos() {
	if (!$price.length) return;

	if (window.innerWidth <= 991) {
		setNextPos(false);
		return;
	}

	var
		docTop = $(window).scrollTop() + 15, // Расстояние от верха страницы до верха окна
		priceTop = $price.offset().top, // Расстояние блока стоимости от верха страницы
		priceParentTop = $priceParent.offset().top, // Расстояние внешнего контейнера от верха страницы
		priceParentWidth = $priceParent.width(), // Ширина внешнего контейнера
		priceHeight = $price.outerHeight(true) + 15; // Высота блока стоимости, включая margin

	if (priceTop < docTop) { // Если блок стоимости ВЫШЕ верха окна
		if (!$price.hasClass(priceFixed)) {
			$price.addClass(priceFixed);
		}
		setNextPos(true);
	} else {
		if (priceTop <= priceParentTop) {
			$price.removeClass(priceFixed);
			setNextPos(false);
		} else {
			setNextPos(true);
		}
	}
	
	function setNextPos(toggle) {
		if (toggle) {
			$priceNext.css({
				'position': 'fixed',
				'width': priceParentWidth,
				'top': priceHeight
			});
		} else {
			$priceNext.css({
				'position': '',
				'width': '',
				'top': ''
			});
		}
	}
}
/* ========== */
