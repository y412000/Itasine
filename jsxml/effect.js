$(document).ready(function(){
	let windowFlag = "";
	
	backgroundImg();
	fluidSwitch();
	toppingDisplay();
	
	/**************當視窗大小改變時**************/
	$(window).resize(function(){
		
		windowSizeChangeImg();		
		toppingDisplay();
		fluidSwitch();
		
	});
	
	/**************當視窗滾動時**************/
	$(window).scroll(function(){
		
		toppingDisplay();

	});
	
	/*點選右下角置頂鈕時，安排捲動動畫至頂端*/
	$("#topping").click(function(){
		$("html, body").animate({scrollTop: 0}, 800);
	});
	
/*************************************************************************************/		
	
	/*隨著瀏覽器視窗大小更動背景圖片大小*/
	function backgroundImg() {
		let bgimageW = 1920;
		let bgimageH = 1247; 

		let winWidth = $(window).width();
		let winHeight = $(window).height();

		let ratioW = winWidth / bgimageW;
		let ratioH = winHeight / bgimageH;

		if( ratioW > ratioH ) {			//橫狀長方形
			$("#backgroundImage").css("background-size", "100vw auto");
			windowFlag = true;
		} else {						//豎狀長方形
			$("#backgroundImage").css("background-size", "auto 100vh");
			windowFlag = false;
		}
	}
	
	function windowSizeChangeImg() {
		let bgimageW = 1920;
		let bgimageH = 1247; 

		let winWidth = $(window).width();
		let winHeight = $(window).height();

		let ratioW = winWidth / bgimageW;
		let ratioH = winHeight / bgimageH;

		if( windowFlag == true && ratioH > ratioW) {   							//原橫向介面換為直向介面
			$("#backgroundImage").css("background-size", "auto 100vh");
			windowFlag = false;
		} else if ( windowFlag == false && ratioW > ratioH) {					//原直向介面換為橫向介面
			$("#backgroundImage").css("background-size", "100vw auto");
			windowFlag = true;
		}
	}
	
	/*點選右下角置頂鈕時，安排捲動動畫至頂端*/
	function toppingDisplay() {
		if( $("#myMainBar").offset().top < 500) {
			$("#topping").hide();
		} else {
			$("#topping").show();
		}
	}
	
	/*當瀏覽器寬度小於768px時改為container-fluid*/
	function fluidSwitch() {
		if( $(window).width() < 768 ) {
			$("section").addClass("container-fliud");
			$("section").removeClass("container");
		} else {
			$("section").addClass("container");
			$("section").removeClass("container-fluid");
		}
	}
	
	function navLiEffect() {
		if( $(window).width() < 768 ) {
			$(".navbar-collapse li").on({
				mousedown: function() {
					$(this).css("background-color", "rgba(80, 80, 80 ,0.6)");
					$(this).css("box-shadow", "inset 0px 0px 5px rgba(50,50,50,0.8), inset 0px 0px 2px rgba(50,50,50,0.5)");
					$(this).css("padding", "0.8rem 25px 0.8rem 35px");
				}, 
				mouseenter: function() {
					$(this).css("background-color", "rgba(80, 80, 80 ,0.6)");
					$(this).css("box-shadow", "inset 0px 0px 5px rgba(50,50,50,0.8), inset 0px 0px 2px rgba(50,50,50,0.5)");
					$(this).css("padding", "0.8rem 25px 0.8rem 35px");
				}, 
				mouseleave: function() {
					$(this).css("background-color", "");
					$(this).css("box-shadow", "none");
					$(this).css("padding", "0.8rem 25px");
				}
			});
		}
	}
	
	
	
});

