/* Инициализация карты */
function initMap() {
	var $map = $('.map');

	if (!$map.length || $map.is(':hidden')) return;

	/* Точки */
	var dot1 = {lat: 59.999921, lng: 30.256418}; // Гаккелевская, 21А
	/* ===== */

	/* Карты */
	if (document.getElementById('mapContacts')) { // Карта в контактах
		var map1 = new google.maps.Map(document.getElementById('mapContacts'), {
			zoom: 15,
			center: dot1,
			scrollwheel: false,
			mapTypeControl: true,
			streetViewControl: false,
			mapTypeControlOptions: {
				mapTypeIds: [
					google.maps.MapTypeId.ROADMAP,
					google.maps.MapTypeId.SATELLITE
				]
			}
		});

		var marker1 = new google.maps.Marker({
			position: dot1,
			map: map1,
			title: 'Webcenter',
			id: 'marker1'
		});

		/* Центрирование карты при ресайзе */
		var lastSize = 0; // Предыдущая ширина экрана
		google.maps.event.addDomListener(window, "resize", function() {
			if ((window.innerWidth == 768) && (lastSize == 767)) {
				setTimeout(function() {
					google.maps.event.trigger(map1, "resize");
					map1.panTo(dot1);
				}, 600);
			} else {
				google.maps.event.trigger(map1, "resize");
				map1.panTo(dot1);
			}
			lastSize = window.innerWidth;
		});
		/* ===== */

		/* Центрирование карты при клике на кнопку панели */
		document.querySelector('.cont-panel__btn').addEventListener('click', function() {
			var
				delay = 20, // Частота срабатывания таймера
				delCnt = 0; // Суммарное время работы таймера

			var mapInt = setInterval(function() {
				google.maps.event.trigger(map1, "resize");
				map1.panTo(dot1);
				delCnt += delay;
				if (delCnt >= 600) {
					clearInterval(mapInt);
				}
			}, delay);
		});
		/* ===== */
	}
	/* ===== */
}
/* ========== */
