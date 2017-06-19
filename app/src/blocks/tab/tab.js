/* Табы */
var
	$tabLink = $('.tab__link'), // Заголовки табов
	tabLinkAct = 'tab__title_active', // Класс активного заголовка
	tabBodyClass = 'tab__body', // Класс тела табов
	$tabItem = $('.tab__item'), // Табы
	tabItemAct = 'tab__item_active', // Класс активного таба
	$line = $('.tab__line'), // Ползунок
	tabToggle = false, // Заглушка
	tabPoint = 768; // Брейкпоинт на мобильную версию

$('.' + tabItemAct).css('display', 'block');

if (window.innerWidth < tabPoint) {
	moveTabs(true);
} else {
	moveLine($('.' + tabLinkAct));
}

$(window).on('resize', function() {
	if (window.innerWidth < tabPoint) {
		moveTabs(true);
	} else {
		moveTabs(false);
		moveLine($('.' + tabLinkAct));
	}
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
		moveLine($this.parent());
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
function moveLine(tabTitle, inner) {
	if (!tabTitle.length) return;

	var
		$this = tabTitle,
		tabWidth = Math.ceil($this.width()), // Ширина текущего заголовка
		tabLeft = Math.ceil($this.position().left); // Положение левого края текущего заголовка

	if (parseInt($line.css('left')) != tabLeft || parseInt($line.css('width')) != tabWidth) {
		$line.css({
			'left': tabLeft,
			'width': tabWidth
		})
	}

	if (inner) return;

	setTimeout(function() {
		moveLine($this, true);
	}, 300);
}
/* ========== */
