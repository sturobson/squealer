// header resize on vertical scroll

if ( $(window).width() < 1100) {

}
else {
	$(window).scroll(function(){
		if ($(this).scrollTop() > 160){
			$('header').addClass("narrow-header");
			$('.menu-item, .nav-language-holder').addClass("small-nav");
		}
		else {
			$('header').removeClass("narrow-header");
			$('.menu-item, .nav-language-holder').removeClass("small-nav");
		}
	});
}
