$(function() {
	var
		$popup1 = $("[data-target='#blackFriday-1']"),
		$popup2 = $("[data-target='#blackFriday-2']"),
		cookie1 = 'blackFriday-1',
		cookie2 = 'blackFriday-2',
		cookieOpts = {
			path: '/',
			expires: 1
		};

	if ($popup1.length && !$.cookie(cookie1)) {
		$popup1.trigger('click');
		$.cookie(cookie1, true, cookieOpts);
	} else if ($popup2.length && !$.cookie(cookie2)) {
		$popup2.trigger('click');
		$.cookie(cookie2, true, cookieOpts);
	}
});