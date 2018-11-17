$(document).ready(function(){
	
	/**************當視窗大小改變時**************/
	$(window).resize(function(){
		
		mainBarBgcolor();		
		
	});
	
	/**************當視窗滾動時**************/
	$(window).scroll(function(){
		
		mainBarBgcolor();

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
	
	/*控制主導覽列背景顏色*/
	function mainBarBgcolor() {
		/**************************************************
		1. 視窗寬度大於768px且畫面向下滾動時為透明深暗
		2. 視窗寬度大於768px但畫面置頂時為透明淺暗
		3. 視窗寬度小於768px，無論畫面位於哪處皆為灰色
		**************************************************/
		if( $(window).width() > 768) {
			if( $("#myMainBar").offset().top > 90) {
				$("#myMainBar").css("background-color", "rgba(0, 0, 0, 0.7)");
			} else {
				$("#myMainBar").css("background-color", "rgba(0, 0, 0, 0.2)");
			}
		} else {
			$("#myMainBar").css("background-color", "rgba(60, 60, 60, 1)");
		}
	}
	
	
});

