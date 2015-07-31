head.ready(function() {

// popup
(function () {
	var body  = $('body'),
		welcome = $('.js-popup-welcome'),
		enter = $('.js-popup-enter'),
		popup = $('.js-popup'),
		close = $('.js-popup-close'),
		sl    = $('.js-sl');
	enter.on('click', function () {
		var _this = $(this),
			el = _this.data('popup');
		popup.fadeOut();
		$('.' + el).fadeIn();
		body.addClass('no-scroll');
		// gallery
		if (el == 'js-popup-gallery') {
			var index = _this.data('index');
			if (!sl.hasClass('is-inited')) {
				sl.addClass('is-inited');
				sl.slick({
					slide: '.js-sl-item',
					fade: true
				});
				sl.slick('slickGoTo', index);
			};
			sl.slick('slickGoTo', index);
		};
		return false;
	});
	close.on('click', function () {
		popup.fadeOut();
		body.removeClass('no-scroll');
	});
	// welcome
	setTimeout(function () {
		welcome.fadeIn();
	}, 1000);
}());
	
});