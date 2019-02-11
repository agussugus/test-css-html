$(document).ready(function(){
	$('.header').hide()
	$('.header').slideDown(3000);

	$('#logo').hide()
	$('#logo').fadeIn(5000)

	$('.nav1').hide()
	$('.nav1').fadeIn(5000)

	$('#art1-about').hide()
	$('#art1-about').animate({height:'350px'},"slow");
	$('#art1-about').animate({width:'1500px'},"slow");
})