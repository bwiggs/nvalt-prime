(function($) {
	$('p > code').each(function() {
		var $block = $(this),
		    lines  = $block.text().split('\n');
		if (lines.length > 1) {
			$block.addClass(lines.shift());
			$block.text(lines.join('\n'));
			$block.wrapAll('<pre />');
		}
	})

})(jQuery);
