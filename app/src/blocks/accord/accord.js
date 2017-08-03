/* Аккордеон */
var
	$accordPanels = $('.accord__panel'), // Панели
	$accordHead = $('.accord__head'), // Шапки панелей
	accordOpened = 'accord__panel_opened', // Класс открытой панели
	accordOpenedFull = 'accord__panel_opened-full', // Класс открытой панели
	accordRadio = 'accord__radio', // Класс чекбокса
	accordRadioChecked = 'accord__radio_checked', // Класс активного чекбокса
	$accordRadio = $('.' + accordRadio), // Чекбоксы
	$mainCostWrap = $('.main__price .price__cost'), // Фиксированный блок стоимости
	$bottomCostWrap = $('.main__total-cost'), // Блок стоимости снизу
	$inputHidPrice = $('#priceCalc'), // Скрытое поле ввода со значением стоимости
	$inputHidValues = $('#valuesCalc'); // Скрытое поле ввода со значением выбранных пунктов

// Работа аккордеона
$accordHead.on('click', function() {
	var
		$this = $(this),
		$next = $this.next(), // Тело панели
		$parent = $this.parent(), // Контейнер текущей шапки
		$parentNext = $parent.next(), // Контейнер соседа снизу
		$parentPrev = $parent.prev(); // Контейнер соседа сверху

	if ($parent.hasClass(accordOpened)) {
		$parent.removeClass(accordOpened);
		$next.slideUp(300);

		if ($parentPrev.hasClass(accordOpenedFull)) {
			$parentPrev
				.removeClass(accordOpenedFull)
				.addClass(accordOpened);
		}
	} else if ($parent.hasClass(accordOpenedFull)) {
		$parent.removeClass(accordOpenedFull);
		$next.slideUp(300);

		if ($parentPrev.hasClass(accordOpenedFull)) {
			$parentPrev
				.removeClass(accordOpenedFull)
				.addClass(accordOpened);
		}
	} else {
		$parent.addClass(accordOpened);
		$next.slideDown(300);

		if ($parentPrev.hasClass(accordOpened)) {
			$parentPrev
				.removeClass(accordOpened)
				.addClass(accordOpenedFull);
		}

		if ($parentNext.hasClass(accordOpened) || $parentNext.hasClass(accordOpenedFull)) {
			$parent
				.removeClass(accordOpened)
				.addClass(accordOpenedFull);
		}
	}
});
// ==========

// Работа чекбоксов
$accordRadio.on('click', function() {
	var
		$this = $(this),
		cost = +$mainCostWrap.text(); // Стоимость

	if ($this.hasClass(accordRadioChecked)) {
		$this
			.removeClass(accordRadioChecked)
			.prop('checked', false);

		cost -= +$this.val();
	} else {

		if ($this.attr('type') == 'radio') {
			var $prev = $this.parent().parent().find('.' + accordRadioChecked); // Чекбокс, уже выбранный на момент клика

			if ($prev.length) {
				$prev
					.removeClass(accordRadioChecked)
					.prop('checked', false);

				cost -= +$prev.val();
			}
		}

		$this
			.addClass(accordRadioChecked)
			.prop('checked', true);

		cost += +$this.val();
	}

	$mainCostWrap.text(cost);
	$bottomCostWrap.text(cost);

	/* Добавление стоимости в скрытое поле формы */
	if ($inputHidPrice.length) {
		$inputHidPrice.val(cost);
	}
	/* ===== */

	/* Добавление выбранных значений в скрытое поле формы */
	if ($inputHidValues.length) {

		var values = {};
		values.panel = [];

		$accordPanels.each(function() {
			var
				$this = $(this),
				inputs = $this.find('.' + accordRadio),
				panelObj = {},
				inputsArr = [];

			inputs.each(function() {
				if (!$(this).hasClass(accordRadioChecked)) return;
				inputsArr.push(
					$(this)
						.parent()
						.find('.accord__sub-title')
						.text()
				);
			});

			if (!inputsArr.length) return;

			panelObj.panelTitle = $this.find('.accord__title').text();
			panelObj.items = inputsArr;

			values.panel.push(panelObj);
		});

		var str = '';

		for (var i = 0; i < values.panel.length; i++) {
			var thisObj = values.panel[i];

			if (i) str += ' ';

			str += thisObj.panelTitle + ': ';

			for (var j = 0; j < thisObj.items.length; j++) {
				if (thisObj.items[j + 1]) {
					str += thisObj.items[j] + ', ';
				} else {
					str += thisObj.items[j] + '.';
				}
			}
		}

		$inputHidValues.val(str);
	}
	/* ===== */
});
// ==========

// Появление и скрытие фиксированного блока стоимости
toggleMobilePrice();

$(window).on('scroll resize', function() {
	toggleMobilePrice();
});
// ==========

function toggleMobilePrice() {
	if (!$accordHead.length) return;

	var
		$mainCostOuter = $mainCostWrap.parent().parent(), // Внешний контейнер главной стоимости
		$bottomCostOuter = $bottomCostWrap.parent().parent(), // Внешний контейнер нижней стоимости
		mainCostPos = $mainCostOuter.offset().top, // Верхняя позиция главной стоимости
		bottomCostPos = $bottomCostOuter.offset().top, // Верхняя позиция нижней стоимости
		mainCostHidden = 'price_hidden'; // Класс, скрывающий блок стоимости

	if (window.innerWidth > 991) {
		$mainCostOuter.removeClass(mainCostHidden);
		return;
	}

	//TODO Допилить плавное появление блока стоимости
	if (mainCostPos > bottomCostPos) {
		$mainCostOuter.addClass(mainCostHidden);
	} else {
		$mainCostOuter.removeClass(mainCostHidden);
	}
}
/* ========== */
