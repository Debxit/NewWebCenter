/* Панель контактов */
var
	$pan = $('.cont-panel'), // Внешний контейнер панели
	panClosed = 'cont-panel_closed', // Класс, закрывающий панель
	$panI = $('.cont-panel__i'), // Внешний контейнер панели
	$panBtn = $('.cont-panel__btn'), // Кнопка сворачивания / разворачиавания панели
	$map = $('#mapContacts').parent(), // Контейнер карты
	mapLight = 'map_light', // Класс засветлённой карты
	mapRight = 'map__wrap_right'; // Класс, отодвигающий карту вправо


$panBtn.on('click', function() {
	$pan.toggleClass(panClosed);
	$map
		.toggleClass(mapLight)
		.children(0)
		.toggleClass(mapRight);
});

$panI.perfectScrollbar(); // Кастомный ползунок

$(window).on('resize', function() {
	$panI.perfectScrollbar('update');
});
/* ========== */
