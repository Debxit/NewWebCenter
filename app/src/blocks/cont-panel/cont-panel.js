/* Панель контактов */
var
	$pan = $('.cont-panel'), // Внешний контейнер панели
	panClosed = 'cont-panel_closed', // Класс, закрывающий панель
	$panBtn = $('.cont-panel__btn'), // Кнопка сворачивания / разворачиавания панели
	$map = $('#mapContacts').parent(), // Контейнер карты
	mapLight = 'map_light'; // Класс засветлённой карты


$panBtn.on('click', function() {
	$pan.toggleClass(panClosed);
	$map.toggleClass(mapLight);
});
/* ========== */
