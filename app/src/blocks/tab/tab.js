/* Табы */
var
	$tabLink = $('.tab__link'), // Заголовки табов
	tabLinkAct = 'tab__title_active', // Класс активного заголовка
	$tabItem = $('.tab__item'), // Табы
	tabItemAct = 'tab__item_active', // Класс активного таба
	tabToggle = false; // Заглушка

$tabLink.on('click', function(event) {
	event.preventDefault();

	var
		$this = $(this), // Текущий заголовок
		link = $this.attr('href').slice(1), // Ссылка кликнутого заголовка
		$item = $('#' + link); // Таб, который надо отобразить

	if ($this.hasClass(tabLinkAct) || tabToggle) return;

	tabToggle = true;

	// Обработка заголовков
	$tabLink.each(function() {
		var $thisLink = $(this);

		if ($thisLink.attr('href') == $this.attr('href')) {
			$thisLink
				.parent()
				.addClass(tabLinkAct);
		} else {
			$thisLink
				.parent()
				.removeClass(tabLinkAct);
		}
	});
	// =====

	// Обработка табов
	$tabItem.each(function() {
		$(this).fadeOut(300, function() {
			$(this).removeClass(tabItemAct);
		});

		setTimeout(function() {
			$item.fadeIn(300, function() {
				$item.addClass(tabItemAct);
				tabToggle = false;
			});
		}, 300);
	});
	// =====

	//TODO Сделать перетаскивание ползунка мышкой
	//TODO Сделать переключение слайдов по таймеру
	//TODO Сделать поддержку быстрого переключения
	// Обработка ползунка
	var
		$line = $('.tab__line'), // Ползунок
		$lineRail = $('.tab__line-rail'), // Контейнер ползунка
		lineRailSpace = parseInt($lineRail.css('margin-left')), // Расстояние контейнера ползунка от края
		tabCenter = $this.parent().position().left + Math.round($this.width() / 2), // Положение центра текущего заголовка
		lineCenter = Math.round($line.width() / 2); // Положение центра ползунка

	if (!$this.parent().prev().length) { // Первый заголовок
		$line.css({
			'left': 0
		});
	} else if (!$this.parent().next().length) { // Последний заголовок
		$line.css({
			'left': $lineRail.width() - $line.width() + 1
		});
	} else {
		$line.css({
			'left': tabCenter - lineCenter - lineRailSpace
		});
	}
	// =====
});
/* ========== */
