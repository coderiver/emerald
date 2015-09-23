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
		popup.fadeOut(200);
		$('.' + el).fadeIn(200);
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
		popup.fadeOut(200);
		body.removeClass('no-scroll');
	});
	// welcome
	setTimeout(function () {
		// localstorage
		if (typeof(Storage) !== 'undefine') {
		    var status = localStorage.getItem('validate');
		    console.log(status);
		    if (!status == 'yes' || status == null) {
		 	welcome.fadeIn();
		 	body.addClass('no-scroll');
		    };
		} else {
			body.removeClass('no-scroll');
		    // Sorry! No Web Storage support..
		}
	}, 1000);
}());

// form
(function () {
	var body = $('body'),
		popup = $('.js-popup'),
		notify = $('.js-notify');
	// welcome
	$.validate({
		form : '#form-welcome',
		onSuccess: function() {
			post_data = {
				'name': $('#form-welcome input[name=name]').val(),
				'email': $('#form-welcome input[name=email]').val(),
				'phone': $('#form-welcome input[name=phone]').val()
			};
			//Ajax post data to server
			$.post('send.php', post_data, function(response){
				if (response.type == 'error') {}
				else {
					//reset values in all input fields
					body.removeClass('no-scroll');
					popup.fadeOut();
					$('#form-welcome').get(0).reset();
					notify.fadeIn();
					setTimeout(function () {
						notify.fadeOut();
					}, 2000);
				}
			}, 'json');
			// localstorage
			if (typeof(Storage) !== 'undefined') {
				// Store
				localStorage.setItem('validate', 'yes');
			} else {
				// Sorry! No Web Storage support..
			}
			return false;
		}
	});
	// feedback
	$.validate({
		form : '#form-feedback',
		onSuccess: function() {
			post_data = {
				'name': $('#form-feedback input[name=name]').val(),
				'email': $('#form-feedback input[name=email]').val(),
				'phone': $('#form-feedback input[name=phone]').val(),
				'comment': $('#form-feedback textarea[name=comment]').val()
			};
			//Ajax post data to server
			$.post('send.php', post_data, function(response){
				if (response.type == 'error') {}
				else {
					//reset values in all input fields
					$('#form-feedback').get(0).reset();
					body.removeClass('no-scroll');
					popup.fadeOut();
					notify.fadeIn();
					setTimeout(function () {
						notify.fadeOut();
					}, 2000);
				}
			}, 'json');
			return false;
		}
	});
	// footer
	$.validate({
		form : '#form-footer',
		onSuccess: function() {
			post_data = {
				'name': $('#form-footer input[name=name]').val(),
				'email': $('#form-footer input[name=email]').val(),
				'phone': $('#form-footer input[name=phone]').val(),
				'comment': $('#form-footer textarea[name=comment]').val()
			};
			//Ajax post data to server
			$.post('send.php', post_data, function(response){
				if (response.type == 'error') {}
				else {
					//reset values in all input fields
					$('#form-footer').get(0).reset();
					notify.fadeIn();
					setTimeout(function () {
						notify.fadeOut();
					}, 2000);
				}
			}, 'json');
			return false;
		}
	});
}());

	// autocomplete and mask
	$(function() {
		// russian version
		var rusTags = [{
			label: '+44 (Англия)',
			value: '+44'
		}, {
			label: '+39 (Италия)',
			value: '+39'
		}, {
			label: '+974 (Катар)',
			value: '+974'
		}, {
			label: '+86 (Китай)',
			value: '+86'
		}, {
			label: '+92 (Пакистан)',
			value: '+92'
		}, {
			label: '+7 (Россия)',
			value: '+7'
		}, {
			label: '+966 (Саудовская Аравия)',
			value: '+966'
		}, {
			label: '+33 (Франция)',
			value: '+33'
		}, {
			label: '+41 (Швейцария)',
			value: '+41'
		}];

		// english version
		var enTags = [{
			label: '+44 (UK)',
			value: '+44'
		}, {
			label: '+39 (Italy)',
			value: '+39'
		}, {
			label: '+974 (Quatar)',
			value: '+974'
		}, {
			label: '+86 (China)',
			value: '+86'
		}, {
			label: '+92 (Pakistan)',
			value: '+92'
		}, {
			label: '+7 (Russia)',
			value: '+7'
		}, {
			label: '+966 (Saudi Arabia)',
			value: '+966'
		}, {
			label: '+33 (France)',
			value: '+33'
		}, {
			label: '+41 (Switzerland)',
			value: '+41'
		}];

		// arabic version
		var arTags = [{
			label: '+44 (المملكة المتحدة)',
			value: '+44'
		}, {
			label: '+39 (إيطاليا)',
			value: '+39'
		}, {
			label: '+974 (بقطر في تشرين الثاني)',
			value: '+974'
		}, {
			label: '+86 (الصين)',
			value: '+86'
		}, {
			label: '+92 (باكستان)',
			value: '+92'
		}, {
			label: '+7 (روسيا)',
			value: '+7'
		}, {
			label: '+966 (المملكة العربية السعودية)',
			value: '+966'
		}, {
			label: '+33 (فرنسا)',
			value: '+33'
		}, {
			label: '+41 (سويسرا)',
			value: '+41'
		}];

		$('.js-autocomplete.js-ru').autocomplete({
			minLength: 0,
			source: rusTags
		}).bind('focus', function() {
			$(this).autocomplete('search');
		});
		$('.js-autocomplete.js-en').autocomplete({
			minLength: 0,
			source: enTags
		}).bind('focus', function() {
			$(this).autocomplete('search');
		});
		$('.js-autocomplete.js-ar').autocomplete({
			minLength: 0,
			source: arTags
		}).bind('focus', function() {
			$(this).autocomplete('search');
		});
	});

	$('.js-mask').mask('+000-00-0000000', {
		placeholder: '+___-__-_______'
	});
});

