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

		/* Образец карточки */
		var contentString =
				'<div class="map__info-wrap">' +
					'<span class="map__info-title">Адрес:</span>' +
					'<span class="map__info-addr">197227, Россия, Санкт-Петербург,<br>ул. Гаккелевская, 21А (БЦ "БДЦ"),<br>офис 20.03</span>' +
				'</div>'
			;
		/* ================ */

		/* Рамка */
		var infoBubble = new InfoBubble({
			content: contentString,
			padding: 7,
			borderWidth: 1,
			borderColor: '#334b61',
			disableAutoPan: false,
			borderRadius: 3,
			disableAnimation: true,
			hideCloseButton: true,
			backgroundColor: 'white',
			color: '#334b61',
			arrowSize: 10,
			arrowPosition: 50,
			arrowStyle: 0,
			shadowStyle: 0,
			minHeight: 0,
			minWidth: 0
		});
		/* ===== */

		/* Маркеры */
		var markerImage = '../img/map-marker.svg';

		var marker1 = new google.maps.Marker({
			position: dot1,
			map: map1,
			icon: markerImage
		});

		marker1.addListener('click', function() {
			infoBubble.open(map1, marker1);
		});
		/* ===== */

		/* Центрирование карты при ресайзе */
		var lastSize = 0; // Предыдущая ширина экрана
		google.maps.event.addDomListener(window, "resize", function() {
			if ((window.innerWidth == 992) && (lastSize == 991)) {
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
