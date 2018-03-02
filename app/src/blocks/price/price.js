/* Блок стоимости */
var
	$price = $('.main__price'), // Блок стоимости
	priceFixed = 'main__price_fixed'; // Класс фиксированного блока стоимости

$price.each(function () {
	var
		$this = $(this),
      onReady = 0;

    setPricePos($this, 1);

    $(window).on('scroll resize', function() {
        setPricePos($this);
    });

});

function setPricePos($this, onReady) {
	if (!$this.length) return;

	var
    	$priceParent = $this.parent(), // Внешний контейнер блока стоимости
    	$priceNext = $this.next(), // Блок рядом с блоком стоимости
		docTop = $(window).scrollTop() + 15, // Расстояние от верха страницы до верха окна
		priceTop = $this.offset().top, // Расстояние блока стоимости от верха страницы
		priceParentTop = $priceParent.offset().top, // Расстояние внешнего контейнера от верха страницы
		priceParentWidth = $priceParent.width(), // Ширина внешнего контейнера
		priceParentHeight = $priceParent.height(), // Высота внешнего контейнера
		priceHeight = $this.outerHeight(true) + 15; // Высота блока стоимости, включая margin

	if (window.innerWidth <= 991) {
		setNextPos(false);
		$this.parent().css('height', '');
		return;
	}

	if (priceTop < docTop) { // Если блок стоимости ВЫШЕ верха окна
		$priceParent.css('height', priceParentHeight);
		$this.addClass(priceFixed);
		setNextPos(true);
	} else {
		if (priceTop <= priceParentTop) {
			$this.removeClass(priceFixed);
			setNextPos(false);
			$priceParent.css('height', '');
		} else {
			$priceParent.css('height', priceParentHeight);
			setNextPos(true);
		}
	}

	if ($priceNext.length) {

		if (onReady) {
			$priceNext.perfectScrollbar();
		} else {
			$priceNext.perfectScrollbar('update');
		}
	}


	function setNextPos(toggle) {

		if ($priceNext === undefined || !$priceNext.length) return;

		if (toggle) {
			$priceNext.css({
				'position': 'fixed',
				'width': priceParentWidth,
				'height': window.innerHeight - priceHeight - $('.footer').outerHeight(),
				'top': priceHeight
			});
		} else {
			$priceNext.css({
				'position': '',
				'width': '',
				'height': '',
				'top': ''
			});
		}
	}
}
/* ========== */
