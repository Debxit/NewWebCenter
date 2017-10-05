/* Бегунок */
var
	classRunner = 'runner',
	$runner = $('.' + classRunner);

$runner.each(function(event) {
	var
		$this = $(this),
		$item = $this.find('.' + classRunner + '__item'),
		$index = $this.find('.' + classRunner + '__index'),
		$cost = $this.find('.' + classRunner + '__cost-val'),
		min = parseInt($this.attr('data-min')),
		max = parseInt($this.attr('data-max')),
		step = parseInt($this.attr('data-step'));

	$item.slider({
		range: 'max',
		min: min,
		max: max,
		step: step,
		value: min,
		classes: {
			"ui-slider-range": classRunner + '__rail',
			"ui-slider-handle": classRunner + '__handle'
		},
		slide: function(event, ui) {
			$index.text(parseInt(ui.value) / step);
			$cost.attr('data-prev-value', $cost.text());
			$cost.text(ui.value);
		}
	});
});
/* ===== */
