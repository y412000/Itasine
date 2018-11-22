$(document).ready(function(){
	let originPos = $("html, body").scrollTop(0);
	let screenH = $(window).height();
	$(".indexCtn:not(:eq(0))").css("opacity", 0);	
	
	$(window).on({
		scroll: function(){
			wordOpacity();
		}, 
		resize: function(){
			screenH = $(window).height();
		}
	});
	
	
/************************************************/	
	
	function wordOpacity(){
		let currentPos = $("html, body").scrollTop();
		
		let ratio = currentPos/screenH;
		let num = Math.floor(ratio);

		opaRatio = ratio - Math.floor(ratio);
		$("#scrollCtn").text(num + ". " + opaRatio);
		$(".indexCtn:eq(" + num + ")").css("opacity", (1-opaRatio));
		$(".indexCtn:eq(" + (num+1) + ")").css("opacity", opaRatio);
		
		originPos = currentPos;
		
	}
	
	
});