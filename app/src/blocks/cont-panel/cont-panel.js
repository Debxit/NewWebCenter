/* Панель контактов */
var
	$pan = $('.cont-panel'), // Внешний контейнер панели
	panClosed = 'cont-panel_closed', // Класс, закрывающий панель
	$panI = $('.cont-panel__i'), // Внешний контейнер панели
	$panBtn = $('.cont-panel__btn'), // Кнопка сворачивания / разворачиавания панели
	$map = $('#mapContacts').parent(), // Контейнер карты
	mapLight = 'map_light', // Класс засветлённой карты
	mapRight = 'map_collapse'; // Класс, схлопывающий карту


$panBtn.on('click', function() {
	$pan.toggleClass(panClosed);
	$map
		.toggleClass(mapLight)
		.toggleClass(mapRight);

	if ($panBtn.text() == 'Открыть карту') {
		$panBtn.text('Закрыть карту');
	} else {
		$panBtn.text('Открыть карту');
	}
});

$panI.perfectScrollbar(); // Кастомный ползунок

$(window).on('resize', function() {
	$panI.perfectScrollbar('update');
});
/* ========== */
