/* Проверка наличия скролла на странице */
function hasScroll(a) {
	var d = document,
		b = d.body,
		e = d.documentElement,
		c = "client" + a;
	a = "scroll" + a;
	return /CSS/.test(d.compatMode)? (e[c]< e[a]) : (b[c]< b[a])
}
/* ========== */

/* Узнать ширину ползунка */
function scrollbarWidth() {
	var
		documentWidth = parseInt(document.documentElement.clientWidth),
		windowWidth = parseInt(window.innerWidth);
	return windowWidth - documentWidth;
}
/* ========== */

/* Сделать боди фиксированным */
function toggleBodyNoScroll(close) {
	var
		$body = $('body'),
		noScrollClass = 'noscroll';

	if (close === false) {
		$body
			.css('padding-right', '')
			.removeClass(noScrollClass);
	} else {
		$body
			.css('padding-right', scrollbarWidth())
			.addClass(noScrollClass);
	}
}
/* ========== */