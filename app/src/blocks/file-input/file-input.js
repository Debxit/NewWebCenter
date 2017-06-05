/* Поле ввода типа "файл" */
var
	$fInput = $('.file-input__input'),
	classFocusInput = 'file-input__label_focus';

$fInput.each(function() {
	var $this = $(this);

	// Обработка добавления файла
	$this.on('change', function(e) {
		var value = e.target.value;
		if (!value) return;

		$(this)
			.next()
			.text(value.slice(value.lastIndexOf('\\') + 1));
	});


	// Обработка фокуса на Firefox
	$this.on( 'focus', function(){
		$(this).next().addClass(classFocusInput);
	});

	$this.on( 'blur', function(){
		$(this).next().removeClass(classFocusInput);
	});
});
/* ========== */
