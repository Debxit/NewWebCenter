/* Инициализация карты */
function initMap() {
	var $map = $('.map');

	if (!$map.length || $map.is(':hidden')) return;

	/* Точки */
	var dot1 = {lat: 59.999921, lng: 30.256418};
	/* ===== */

	/* Карты */
	if (document.getElementById('map')) {
		var map1 = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: dot1,
			scrollwheel: false,
			mapTypeControl: true,
			streetViewControl: false,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE]
			}
		});
	}
	/* ===== */

	/* Маркеры */
	if (document.getElementById('map')) {
		var marker1 = new google.maps.Marker({
			position: dot1,
			map: map1,
			title: 'Webcenter',
			id: 'markerCard-1'
		});
	}
	/* ======= */
}
/* ========== */
