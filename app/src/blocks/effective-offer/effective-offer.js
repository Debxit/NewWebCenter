(function() {
	var
		$profits = $('.square-profit'),
		$effective = $('.effective-offer__tab');

	$profits.on('mouseenter', function() {
		var
			$this = $(this),
			target = $this.attr('data-target');

		$profits.removeClass('active');
		$this.addClass('active');
		$effective.removeClass('visible');
		$(target).addClass('visible');
	});
}());