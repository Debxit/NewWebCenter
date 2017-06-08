/* Поле ввода типа "файл" */
var
	$fInput = $('.file-input__input'), // Выборка всех инпутов типа файл
	$fInputClass = 'file-input__input', // Класс инпута типа файл
	classFocusInput = 'file-input__label_focus', // Класс, добавляющий стили при фокусе (для FF)
	fHidden = 'file-input_hidden', // Класс, скрывающий инпут
	fSelected = 'file-input_selected', // Класс инпута с выбранным файлом
	$fReset = $('.file-input__reset'); // Крестики для удаления добавленного файла

// Обработка добавления файла
$fInput.on('change', function() {
	var
		$this = $(this),
		fId = $this.attr('id'), // ID текущего инпута
		$fLabel = $('label[for=' + fId + ']'), // Label, привязанный к текущему input
		value = $this.val(), // Путь добавленного файла
		$nextHid = $($this.parent().nextAll('.' + fHidden)).first(), // Выборка скрытого инпута ниже текущего
		$hidPrev = $nextHid.prev().find('.' + $fInputClass); // Выборка инпута перед первым скрытым

	if (!value) return; // Если нажали "отмена"

	$fLabel.text(value.slice(value.lastIndexOf('\\') + 1)); // Отображение названия файла

	if ($nextHid && $hidPrev.val()) {
		$nextHid.removeClass(fHidden);
	}

	$this.parent().addClass(fSelected);
});

// Обработка удаления файла
$fReset.on('click', function() {
	var
		$this = $(this),
		$inpWrap = $this.parent(), // Текущий контейнер инпута
		$nextAll = $inpWrap.nextAll('.file-input'), // Инпуты после текущего
		$input = $inpWrap.find('.' + $fInputClass), // Текущий инпут
		fId = $input.attr('id'), // ID текущего инпута
		$fLabel = $('label[for=' + fId + ']'); // Label, привязанный к текущему инпуту

	if (!$input.parent().hasClass(fSelected)) return; // Выбираем только с файлом

	$input.val('');

	$inpWrap
		.removeClass(fSelected)
		.insertAfter($nextAll.last());

	if ($nextAll.length && !$nextAll.last().find('.' + $fInputClass).val()) { // Если текущий - не последний и последний - пустой
		$inpWrap.addClass(fHidden);
	}

	$fLabel.text('Прикрепить файл');
});

// Обработка фокуса на Firefox
$fInput.on( 'focus', function(){ $(this).next().addClass(classFocusInput); });
$fInput.on( 'blur', function(){ $(this).next().removeClass(classFocusInput); });
/* ========== */
