/* Модалка */
(function() {
	var
		$links = $('.js-btn_pop'),
		popupVisClass = 'popup_visible',
		wrapVisClass = 'popup__wrap_visible',
		fogClass = 'fog',
		delay = 150;

	if (!$links.length) return;

	$links.each(function() {
		var id = $(this).attr('data-target');

		if (!$(id).length) return;

		// Клик по кнопке, открывающей модалку
		$(this).on('click', function() {
			popup('open', id);
			return false;
		});
		// =====

		// Клик по кнопке "закрыть"
		$(id).find('.popup__close').on('click', function() {
			popup('close', id);
		});
		// =====

		// Клик по серому фону
		$(id).on('click', function(event) {
			if (!$(event.target).hasClass('popup')) return;
			popup('close', id);
		});
		// =====
	});

	// Фикс скролла у body при ресайзе
	$(window).on('resize', function() {
		var isVisible = false;

		$('.popup').each(function() {
			if ($(this).is(':hidden')) return;
			isVisible = true;
		});

		if (isVisible) {
			toggleBodyNoScroll(false);

			if (hasScroll('Height')) {
				toggleBodyNoScroll();
			}
		}
	});
	// =====

	// Закрытие модалки при нажатии ESC
	var closeOnEsc = function(event) {
		if (event.keyCode != 27) return;

		$links.each(function() {
			var id = $(this).attr('data-target');
			popup('close', id);
		});
	};
	// =====

	function popup(action, id) {
		var
			$popup = $(id),
			$wrap = $popup.find('.popup__wrap'),
			$inputs = $popup.find('input:not([type="hidden"]):not([type="submit"]), textarea');

		if (action == 'open') {
			$popup.addClass(popupVisClass);

			if (hasScroll('Height')) {
				toggleBodyNoScroll();
			}

			$('body').append('<div class="' + fogClass + '"></div>');
			$('.' + fogClass).fadeIn(delay * 2);

			$(document).on('keydown', closeOnEsc);

			setTimeout(function() {
				$wrap.addClass(wrapVisClass);
			}, 0);

			setTimeout(function() {
				$inputs.first().focus();
			}, delay * 2);
		}

		if (action == 'close') {
			$(document).off('keydown', closeOnEsc);

			$inputs.val('');
			$wrap.removeClass(wrapVisClass);
			$('.' + fogClass).fadeOut(delay);

			setTimeout(function() {
				$popup.removeClass(popupVisClass);
				toggleBodyNoScroll(false);
				$('.' + fogClass).remove();
			}, delay);
		}
	}
}());
/* ========== */
