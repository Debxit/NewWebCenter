/* Табы */
var
	$tabLink = $('.tab__link'), // Заголовки табов
	tabLinkAct = 'tab__title_active', // Класс активного заголовка
	tabBodyClass = 'tab__body', // Класс тела табов
	$tabItem = $('.tab__item'), // Табы
	tabItemAct = 'tab__item_active', // Класс активного таба
	tabToggle = false, // Заглушка
	tabPoint = 768; // Брейкпоинт на мобильную версию

$('.' + tabItemAct).css('display', 'block');

if (window.innerWidth < tabPoint) {
	moveTabs(true);
}

$(window).on('resize', function() {
	(window.innerWidth < tabPoint) ? moveTabs(true) : moveTabs(false);
});

$tabLink.on('click', function(event) {
	event.preventDefault();

	var
		$this = $(this), // Текущий заголовок
		link = $this.attr('href').slice(1), // Ссылка кликнутого заголовка
		$item = $('#' + link); // Таб, который надо отобразить

	if ($this.parent().hasClass(tabLinkAct) || tabToggle) return;

	if (window.innerWidth >= tabPoint) {
		tabToggle = true;
	}

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
	if (window.innerWidth < tabPoint) {

		$tabItem.slideUp(300);
		$item.slideDown(300);

		setTimeout(function() {
			$tabItem.removeClass(tabItemAct);
			$item.addClass(tabItemAct);
		}, 300);

	} else {

		$tabItem.fadeOut(300, function() {
			$tabItem.removeClass(tabItemAct);
		});

		setTimeout(function() {
			$item.fadeIn(300, function() {
				$item.addClass(tabItemAct);
				tabToggle = false;
			});
		}, 300);
	}
	// =====

	if (window.innerWidth >= tabPoint){
		moveLine($this);
	}
});

function moveTabs(toggle) {
	if (!$tabItem.length) return;

	if (toggle) {
		if (!$tabItem.parent().hasClass(tabBodyClass)) return;
	} else {
		if ($tabItem.parent().hasClass(tabBodyClass)) return;
	}

	$tabLink.each(function() {
		var
			$this = $(this),
			link = $this.attr('href').slice(1), // Ссылка заголовка
			$item = $('#' + link); // Таб, привязанный к текущей ссылке

		if (toggle) {
			$item.insertAfter($this);
		} else {
			$item.appendTo($('.' + tabBodyClass));
		}
	});


}

//TODO Сделать перетаскивание ползунка мышкой
//TODO Сделать переключение слайдов по таймеру
//TODO Сделать поддержку быстрого переключения
function moveLine(tabTitle) {

	var
		$this = tabTitle,
		$line = $('.tab__line'), // Ползунок
		$lineRail = $('.tab__line-rail'), // Контейнер ползунка
		lineRailSpace = parseInt($lineRail.css('left')), // Расстояние контейнера ползунка от края
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
}
/* ========== */
