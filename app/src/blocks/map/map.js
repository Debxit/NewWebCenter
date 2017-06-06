/* Инициализация карты */
function initMap() {
	var $map = $('.map');

	if (!$map.length || $map.is(':hidden')) return;

	/* Точки */
	var dot1 = {lat: 59.999921, lng: 30.256418}; // Гаккелевская, 21А
	var dot2 = {lat: 59.999921, lng: 30.229}; // Чуть сбоку от адреса
	/* ===== */

	/* Карты */
	if (document.getElementById('mapContacts')) { // Карта в контактах
		var map1 = new google.maps.Map(document.getElementById('mapContacts'), {
			zoom: 15,
			center: dot2,
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
	}
	/* ===== */
}
/* ========== */
