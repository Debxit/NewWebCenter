/* Боковое меню */
(function() {
	var
		$sideMenu = $('.side-menu'),
		$headerToggle = $(".header__menu-icon"),
		$sideToggle = $(".side-menu__menu-icon"),
		$nav = $('.nav'),
		$subItems = $('.nav__item_toggle'),
		$body = $('body'),
		fogClass = 'fog',
		delay = 200;

	// Кастомный ползунок
	$nav.perfectScrollbar();
	// =====

	// Работа гамбургеров
	$headerToggle.on('click', function() {
		toggleSideMenu('open');
		return false;
	});
	$sideToggle.on('click', function() {
		toggleSideMenu('close');
		toggleSubMenu('close', $subItems);
		return false;
	});
	// =====

	// Закрывание меню
	$(document).on('click', function(e) {
		var target = e.target;

		if (!$sideMenu.hasClass('open') || !$(target).hasClass('fog')) return;

		toggleSideMenu('close');
		toggleSubMenu('close', $subItems);
	});
	// =====

	// Работа подменю
	$subItems.children('a').on('click', function() {
		var $item = $(this).parent();

		if ($item.hasClass('open')) {
			toggleSubMenu('close', $item);
		} else {
			toggleSubMenu('open', $item);
		}

		return false;
	});
	// =====

	// Ресайз
	$(window).on('resize', function() {
		if (!$sideMenu.hasClass('open')) return;

		toggleBodyNoScroll(false);

		if (hasScroll('Height')) {
			toggleBodyNoScroll();
		}

		$nav.perfectScrollbar('update');
	});
	// =====

	function toggleSideMenu(action) {

		if (action == 'open') {
			$sideMenu.addClass('open');
			$headerToggle.addClass('active');
			$sideToggle.addClass('active');

			if (hasScroll('Height')) {
				toggleBodyNoScroll();
			}

			$body.append('<div class="' + fogClass + '"></div>');
			$('.' + fogClass).fadeIn(delay * 2);
		}

		if (action == 'close') {
			$sideMenu.removeClass('open');
			$headerToggle.removeClass('active');
			$sideToggle.removeClass('active');

			$('.' + fogClass).fadeOut(delay);
			setTimeout(function() {
				$('.' + fogClass).remove();
				toggleBodyNoScroll(false);
			}, delay);
		}
	}
	function toggleSubMenu(action, object) {

		object.each(function() {
			var $this = $(this);

			if (action == 'open') {
				$this
					.addClass('open')
					.find('.nav')
					.slideDown(300);
			}

			if (action == 'close') {
				$this
					.removeClass('open')
					.find('.nav')
					.slideUp(300);
			}

			setTimeout(function() {
				$nav.perfectScrollbar('update');
			}, 300);
		});
	}
}());

/* ===== */
