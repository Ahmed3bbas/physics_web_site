$(document).ready(function(){
	//code
	$('.dropdown').click(function(){
		$(this).toggleClass('show');
		$(this).children('.dropdown-menu').toggleClass('show');

	});

	$('.navbar-toggler').click(function(){
	$(this).next().toggleClass('show');

	});
});