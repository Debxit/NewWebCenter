/* Панель контактов */
var
	$pan = $('.cont-panel'), // Внешний контейнер панели
	$panLeft = $('.cont-panel__left'), // Контейнер, прибивающий контент влево
	$panI = $('.cont-panel__i'), // Внутренний контейнер
	$panBtn = $('.cont-panel__btn'), // Кнопка сворачивания / разворачиавания панели
	panBtnClosed = 'cont-panel__btn_closed', // Класс кнопки при закрытой панели
	$map = $('.map'), // Контейнер карты
	mapLight = 'map_light'; // Класс засветлённой карты

$panBtn.on('click', function() {

	if ($panLeft.css('width') != '1px') { // Если панель не свёрнута
		$panBtn // Обновление кнопки
			.addClass(panBtnClosed)
			.text('Закрыть');

		$map.removeClass(mapLight); // Обновление карты

		$panLeft.animate({'width': 0}); // Сворачивание панели
		$panI.animate({'width': 0});
		$panBtn.animate({'left': 0}, function() {
			$pan.css('right', '100%');
		});
	} else { // Если свёрнута
		$panBtn // Обновление кнопки
			.removeClass(panBtnClosed)
			.text('Открыть');

		$map.addClass(mapLight); // Обновление карты

		$panLeft.animate({'width': '70%'}); // Разворачивание панели
		$panI.animate({'width': '70%'});
		$panBtn.animate({'left': '70%'}, function() {
			$pan.css('right', 0);
		});
	}
});
/* ========== */
