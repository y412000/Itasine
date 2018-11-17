$(document).ready(function(){
	
	backgroundImg();
	menuContainer();
	navLiEffect();
	
	/**************當視窗大小改變時**************/
	$(window).resize(function(){
		
		backgroundImg();
		mainBarBgcolor();		
		toppingDisplay();
		menuContainer();
		navLiEffect();
		
	});
	
	/**************當視窗滾動時**************/
	$(window).scroll(function(){
		
		mainBarBgcolor();
		toppingDisplay();

	});
	
	/*點選右下角置頂鈕時，安排捲動動畫至頂端*/
	$("#topping").click(function(){
		$("html, body").animate({scrollTop: 0}, 800);
	});
	
	/*左方menu導覽列設定滾動動畫並位移至指定位置*/
	$("a[href*='#']:not([href='#'])").click(function(event){
		if($(this.hash) !== "") {
			event.preventDefault();
			let target = $(this.hash);
			if( $(window).width() > 768) {
				$("html, body").animate({scrollTop: target.offset().top - 115}, 600);
			} else {
				$("html, body").animate({scrollTop: target.offset().top - 70}, 700);
			}
			
		}
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
		} else {						//豎狀長方形
			$("#backgroundImage").css("background-size", "auto 100vh");
		}
	}
	
	/*控制主導覽列背景顏色*/
	function mainBarBgcolor() {
		/**************************************************
		1. 視窗寬度大於768px且畫面向下滾動時為透明深暗
		2. 視窗寬度大於768px但畫面置頂時為透明淺暗
		3. 視窗寬度小於768px，無論畫面位於哪處皆為灰色
		**************************************************/
		if( $(window).width() > 768) {
			if( $("#menu #myMainBar").offset().top > 90) {
				$("#menu #myMainBar").css("background-color", "rgba(0, 0, 0, 0.7)");
			} else {
				$("#menu #myMainBar").css("background-color", "rgba(0, 0, 0, 0.2)");
			}
		} else {
			$("#myMainBar").css("background-color", "rgba(60, 60, 60, 1)");
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
	function menuContainer() {
		if( $(window).width()<768 ) {
			$("#menu").removeClass("container");
			$("#menu").addClass("container-fliud");
		} else {
			$("#menu").removeClass("container-fluid");
			$("#menu").addClass("container");
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
	
	function indexAutoScroll() {
		
	}
	
});

