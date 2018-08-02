$(document).ready(function(){
	$('.hamb').click(function(){
		$('.icon').toggleClass('active');
	})
	$('.image-background').click(function(){
		$('.icon').removeClass('active');
	})
})

$(window).on('scroll', function(){
	if ($(window).scrollTop()){
	
		$('.icon').removeClass('active');
	}
})


$(window).on('scroll', function(){
	if ($(window).scrollTop()){
	
		$('nav').addClass('black');
	}
	else {
		$('nav').removeClass('black');
	}
})