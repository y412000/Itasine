$(document).ready(function(){	
	$(window).on({
		scroll: function(){
			wordOpacity();
		}, 
		resize: function(){
			wordOpacity();
		}
	});

/***********************************************	*/
	
	function checkPos() {
		let screenH = $(window).height();
		// 將 判斷線 置於畫面上下的中央
		let position = $("html, body").scrollTop() + (screenH/2);

		return position;
	}
	
	function wordOpacity() {
		let currentPos = checkPos();
		let indexCtn = document.getElementsByClassName("indexCtn");
		const indexCtnLen = indexCtn.length;
		let indexCtnPos = [];
		const time = 700;
		const time2 = 200;
		
		for( let i = 0; i < indexCtnLen; i++){
			indexCtnPos[i] = $(".indexCtn:eq(" + i + ")").offset().top;
		}
		
		/*若 判斷線 的位置落於indexCtn[n]~indexCtn[n+1] 
		  則顯示indexCtn[n]
		  並將indexCtn[n-1]或indexCtn[n+1]隱藏		 */
		if(currentPos >= indexCtnPos[0] && currentPos < indexCtnPos[1]) {
			if($(".indexCtn:eq(1)").css("opacity") != 0 && !$(".indexCtn:eq(1)").is(":animated")) {
				$(".indexCtn:eq(1)").animate({opacity: 0}, time2);
			}
			if($(".indexCtn:eq(0)").css("opacity") != 1 && !$(".indexCtn:eq(0)").is(":animated")){
				$(".indexCtn:eq(0)").animate({opacity: 1}, time);
			}
			
		} else if(currentPos >= indexCtnPos[1] && currentPos < indexCtnPos[2]) {
			if($(".indexCtn:eq(0)").css("opacity") != 0 && !$(".indexCtn:eq(0)").is(":animated")) {
				$(".indexCtn:eq(0)").animate({opacity: 0}, time2);
			}
			if($(".indexCtn:eq(2)").css("opacity") != 0 && !$(".indexCtn:eq(2)").is(":animated")) {
				$(".indexCtn:eq(2)").animate({opacity: 0}, time2);
			}
			if($(".indexCtn:eq(1)").css("opacity") != 1 && !$(".indexCtn:eq(1)").is(":animated")){
				$(".indexCtn:eq(1)").animate({opacity: 1}, time);
			}

		} else if(currentPos >= indexCtnPos[2] && currentPos < indexCtnPos[3]){
			if($(".indexCtn:eq(1)").css("opacity") != 0 && !$(".indexCtn:eq(1)").is(":animated")) {
				$(".indexCtn:eq(1)").animate({opacity: 0}, time2);
			}
			if($(".indexCtn:eq(3)").css("opacity") != 0 && !$(".indexCtn:eq(3)").is(":animated")) {
				$(".indexCtn:eq(3)").animate({opacity: 0}, time2);
			}
			if($(".indexCtn:eq(2)").css("opacity") != 1 && !$(".indexCtn:eq(2)").is(":animated")){
				$(".indexCtn:eq(2)").animate({opacity: 1}, time);
			}
			
		} else if(currentPos >= indexCtnPos[3] && currentPos < indexCtnPos[4]){
			if($(".indexCtn:eq(2)").css("opacity") != 0 && !$(".indexCtn:eq(2)").is(":animated")) {
				$(".indexCtn:eq(2)").animate({opacity: 0}, time2);
			}
			if($(".indexCtn:eq(4)").css("opacity") != 0 && !$(".indexCtn:eq(4)").is(":animated")) {
				$(".indexCtn:eq(4)").animate({opacity: 0}, time2);
			}
			if($(".indexCtn:eq(3)").css("opacity") != 1 && !$(".indexCtn:eq(3)").is(":animated")){
				$(".indexCtn:eq(3)").animate({opacity: 1}, time);
			}

		} else if(currentPos >= indexCtnPos[4]){
			if($(".indexCtn:eq(3)").css("opacity") != 0 && !$(".indexCtn:eq(3)").is(":animated")) {
				$(".indexCtn:eq(3)").animate({opacity: 0}, time2);
			}
			if($(".indexCtn:eq(4)").css("opacity") != 1 && !$(".indexCtn:eq(4)").is(":animated")){
				$(".indexCtn:eq(4)").animate({opacity: 1}, time);
			}
		} 
	
	}
	

});