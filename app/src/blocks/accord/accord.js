/* Аккордеон */
var
	$accordHead = $('.accord__head'), // Шапки панелей
	accordOpened = 'accord__panel_opened', // Класс открытой панели
	accordRadio = 'accord__radio', // Класс чекбокса
	accordRadioChecked = 'accord__radio_checked', // Класс активного чекбокса
	$accordRadio = $('.' + accordRadio); // Чекбоксы

$accordHead.on('click', function() {
	var
		$this = $(this),
		$parent = $this.parent(), // Контейнер текущей шапки
		$next = $this.next(); // Тело панели

	if ($parent.hasClass(accordOpened)) {
		$parent.removeClass(accordOpened);
		$next.slideUp(300);
	} else {
		$parent.addClass(accordOpened);
		$next.slideDown(300);
	}
});

$accordRadio.on('click', function() {
	var
		$this = $(this);

	if ($this.hasClass(accordRadioChecked)) {
		$this
			.removeClass(accordRadioChecked)
			.prop('checked', false);
	} else {
		$this.parent().parent().find('.' + accordRadio).removeClass(accordRadioChecked);
		$this
			.addClass(accordRadioChecked)
			.prop('checked', true);
	}
});
/* ========== */
