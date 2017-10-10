$(document).ready(function(){
	let blocks = 16;

	$('.closed').click(function(){
		$(this).removeClass('closed');
		$(this).addClass('open');

		let length = $('.open').length;
		let open1 = $('.open')[0];
		let open2 = $('.open')[1];
		let open1color = $(open1).css('backgroundColor');
		let open2color = $(open2).css('backgroundColor');

		if (length == 2) {
			if(open1color === open2color) {
				setTimeout(function(){
					$('.open').addClass('done');
					$('.open').removeClass('open');
					blocks -= 2;
					document.getElementById('left').innerHTML = blocks;

					if($('.done').length > 14) {
						$('.open').addClass('done');
						$('.open').removeClass('open');
						alert('You have finished the game! Congratulations!');
						window.history.go(0);
					}

				}, 300);
			} else {
				setTimeout(function(){
					$('.open').addClass('closed');
					$('.open').removeClass('open');
				}, 300);
			}
		}
	});
});