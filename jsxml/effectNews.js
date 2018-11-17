$(document).ready(function() {
	
	spacingP();
	
	$(window).resize(function() {
		spacingP();
	});
	
	
/*************************************************************************************/	
	function spacingP() {
		
		if( $(window).width() < 768 ) { 
			
			// 直向長方形
			if( $(window).width() < $(window).height() ) {
				$(".newsCtn > h4").css("padding-bottom", "2.5%");
				$(".newsCtn > p").css("padding", "2% 5%");
				$(".newsCtn").css("padding", "10% 2% 5% 2%");
			} else {
				$(".newsCtn > h4").css("padding-bottom", "0%");
				$(".newsCtn > p").css("padding", "0% 5%");
				$(".newsCtn").css("padding", "2% 2% 5% 2%");
			}
		}
	}
	
	
	
	
});