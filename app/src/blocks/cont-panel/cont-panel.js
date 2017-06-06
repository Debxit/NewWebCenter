/* Панель контактов */
var
	$pan = $('.cont-panel'), // Внешний контейнер панели
	panClosed = 'cont-panel_closed', // Класс, закрывающий панель
	$panI = $('.cont-panel__i'), // Внешний контейнер панели
	$panBtn = $('.cont-panel__btn'), // Кнопка сворачивания / разворачиавания панели
	$map = $('#mapContacts').parent(), // Контейнер карты
	mapLight = 'map_light'; // Класс засветлённой карты


$panBtn.on('click', function() {
	$pan.toggleClass(panClosed);
	$map.toggleClass(mapLight);
});

$panI.perfectScrollbar(); // Кастомный ползунок

$(window).on('resize', function() {
	$panI.perfectScrollbar('update');
});
/* ========== */
