head.ready(function() {

// slider
(function () {
	var sl = $('.js-sl');
	if (sl.length) {
		sl.slick({
			slide: '.js-sl-item'
		});
	};
}());

// popup
(function () {
	var body = $('body'),
		enter = $('.js-popup-enter'),
		popup = $('.js-popup'),
		close = $('.js-popup-close');
	enter.on('click', function () {
		var el = $(this).data('popup');
		popup.fadeOut();
		$('.' + el).fadeIn();
		body.addClass('no-scroll');
		return false;
	});
	close.on('click', function () {
		popup.fadeOut();
		body.removeClass('no-scroll');
	});
}());
	
});