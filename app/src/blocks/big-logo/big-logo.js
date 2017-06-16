/* animate logo at the first screen */
$('.big-logo').velocity({
	opacity: "1",
	scale: "1"
}, 700, function () {
	$('.big-logo__center').velocity({
		opacity: "1",
		translateX: "0"
	}, 500, "ease", function () {
		$('.big-logo__left, .big-logo__right').velocity({
			opacity: "1",
			translateX: "0"
		}, 500, "ease");
	});
});
/* ========== */
