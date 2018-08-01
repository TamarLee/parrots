$(document).ready(function(){
	$('.hamb').click(function(){
		$('.icon').toggleClass('active');
	})
	$('.image-background').click(function(){
		$('.icon').removeClass('active');
	})
})