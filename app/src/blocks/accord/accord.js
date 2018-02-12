/* Аккордеон */
var
	$accord = $('.accord'), // Аккордеоны
	accordOpened = 'accord__panel_opened', // Класс открытой панели
	accordOpenedFull = 'accord__panel_opened-full', // Класс открытой панели
	accordRadio = 'accord__radio', // Класс чекбокса
	accordRadioChecked = 'accord__radio_checked', // Класс активного чекбокса
	subtitle = 'accord__sub-title'; // Класс подзаголовка

$accord.each(function() {
	var
		$this = $(this),
		$accordPanels = $this.find('.accord__panel'), // Панели
		$accordHead = $this.find('.accord__head'), // Шапки панелей
		$accordRadio = $this.find('.' + accordRadio), // Чекбоксы
		$mainCostWrap = $this.closest('.grid').find('.main__price .price__cost'), // Фиксированный блок стоимости
		$bottomCostWrap = $this.closest('.grid').find('.main__total-cost'); // Блок стоимости снизу

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
	$accordRadio.each(function() {
		var
			$this = $(this),
			$thisSubtitle = $this.next().find('.' + subtitle),
			$thisRunner = $this.next().next(),
			runnerCost = 0; // Стоимость в бегунке

		$thisSubtitle.append(" <span class='red'>(+ " + $this.val() + " руб.)</span>");

		$this.on('click', function() {
			var
				$this = $(this),
				cost = +$mainCostWrap.text(); // Стоимость

			if ($thisRunner.hasClass('runner')) { // Если кликнули на кнопку с бегунком
				runnerCost = parseInt($thisRunner.find('.runner__item').slider('value'));
			} else {
				runnerCost = 0;
			}

			if ($this.hasClass(accordRadioChecked)) { // Если кликнули на уже красную кнопку
				$this
					.removeClass(accordRadioChecked)
					.prop('checked', false);

				cost -= +$this.val();
			} else {

				if ($this.attr('type') == 'radio') { // Если кликаем на радио, а не чекбоксы
					var $prev = $this.parent().parent().find('.' + accordRadioChecked); // radio, уже выбранный на момент клика

					if ($prev.length) { // Если уже есть выделенный радио-батон

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

			setHidPrice($mainCostWrap.text());
			setHidValues($accordPanels);
		});


		if (!$thisRunner.length) return;


		// Работа бегунка
		$thisRunner.find('.runner__item').on('slide', function(event, ui) {

			var $this = $(this);

			setTimeout(function() {
				var
					prevValue = parseInt($this.prev().find('.runner__cost-val').attr('data-prev-value')),
					value = parseInt($this.slider('value')),
					diff = value - prevValue,
					$prev = $thisRunner.prev().prev();

				if ($prev.hasClass(accordRadioChecked)) {
					$bottomCostWrap.text(parseInt($bottomCostWrap.text()) + diff);
					$mainCostWrap.text(parseInt($mainCostWrap.text()) + diff);
				}

				$prev.val(value);
				$thisSubtitle.find('.red').text("(+ " + value + " руб.)");

				setHidPrice($mainCostWrap.text());
			}, 0);
		});
		// =====
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
		if (!$mainCostWrap.length) return;
		if (!$bottomCostWrap.length) return;

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
});

/* Добавление стоимости в скрытое поле формы */
function setHidPrice(cost) {
	var $inputHidPrice = $('#priceCalc'); // Скрытое поле ввода со значением стоимости

	if (!$inputHidPrice.length) return;

	$inputHidPrice.val(cost);
}
/* ===== */

/* Добавление выбранных значений в скрытое поле формы */
function setHidValues($panels) {
	var $inputHidValues = $('#valuesCalc'); // Скрытое поле ввода со значением выбранных пунктов

	if (!$inputHidValues.length) return;

	var values = {};
	values.panel = [];

	$panels.each(function() {
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