$(document).ready(function() {
	
	spacingP();
	
	$(window).resize(function() {
		spacingP();
	});
	
	
/*************************************************************************************/	
	function spacingP() {
		if( $(window).width() < 768 ) {
			if( $(window).width() < $(window).height() ) {
				$(".newsCtn > h4").css("padding-bottom", "2.5%");
				$(".newsCtn > p").css("padding", "2% 5%");
			} else {
				$(".newsCtn > h4").css("padding-bottom", "0%");
				$(".newsCtn > p").css("padding", "0% 5%");
			}
		}
	}
	
	
	
	
});