$(document).ready(function(){
/*	
	$(window).scroll(function(){
        var x = $(window).width();		
		let y = $(window).offset().top;
		
		alert("window width: " + x + "mainbar offset top: " + y);
    });
*/
	
	/**************當視窗大小改變時**************/
	$(window).resize(function(){
		/**************************************************
		主瀏覽列背景顏色根據視窗大小及畫面位置更改
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
			$("#myMainBar").css("background-color", "rgba(72, 72, 72, 1)");
		}
	});
	
	/**************當視窗滾動時**************/
	$(window).scroll(function(){
		/*************************************************
		主瀏覽列背景顏色根據視窗大小及畫面位置更改
		1. 視窗寬度大於768px且畫面向下滾動時為透明深暗
		2. 視窗寬度大於768px但畫面置頂時為透明淺暗
		3. 視窗寬度小於768px，無論畫面位於哪處皆為灰色
		*************************************************/
		if( $(window).width() > 768) {
			if( $("#myMainBar").offset().top > 90) {
				$("#myMainBar").css("background-color", "rgba(0, 0, 0, 0.7)");
			} else {
				$("#myMainBar").css("background-color", "rgba(0, 0, 0, 0.2)");
			}
		} else {
			$("#myMainBar").css("background-color", "rgba(72, 72, 72, 1)");
		}
		
		/*************************************************
		控制置頂按鈕在畫面下向滑動一段距離後顯示
		*************************************************/
		if( $("#myMainBar").offset().top < 500) {
			$("#topping").hide();
		} else {
			$("#topping").show();
		}
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
			$("html, body").animate({scrollTop: target.offset().top - 115}, 700);
		}

	})

	
});

