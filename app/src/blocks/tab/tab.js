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
});
/* ========== */
