// const hamburgar = document.querySelector('.menu-toggler');
// const topNav = document.querySelector('.top-nav');

// hamburgar.addEventListener('click', ()=>{
// 	hamburgar.classList.toggle('open');
// 	topNav.classList.toggle('open');
// });

$(document).ready(function () {
	$('.menu-toggler').on('click', function(){
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});

	$('.top-nav .nav-link').on('click', function(){
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});

	$('nav a[href*="#"]').on('click', function(){
		$('html, body').animate({
			scrollTop:$($(this).attr('href')).offset().top - 100
		},2000);
	});

	$('#up').on('click', function(){
		$('html, body').animate({
			scrollTop:0
		},2000);
	});

	AOS.init({
		easing:'ease',
		duration:1800,
		once:true
	});
});