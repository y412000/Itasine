$(document).ready(function(){
	
	$("#nameHelp, #telHelp, #emailHelp, #selectHelp, #messageHelp").hide();
	formWidth();
	buttonPos();
	/**************當視窗大小改變時**************/
	$(window).resize(function(){
		
		mainBarBgcolor();	
		formWidth();
		buttonPos();
		
	});
	
	/**************當視窗滾動時**************/
	$(window).scroll(function(){
		
		mainBarBgcolor();

	});
	
	$("#submit").click(function(){
		
		checkForm();
		
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
	
	function formWidth() {
		let shopWidth = $(".locaCtn").width() + $(".locaMap").width();
		
		if($(window).width() > 768) {
			$(".form-group").css("width", shopWidth);
		} else {
			$(".form-group").css("width", "auto");
		}
	}
	
	function buttonPos() {
		if($(window).width() > 768) {
			$(".formButton").addClass("justify-content-center");
			$(".formButton").removeClass("justify-content-around");
		} else {
			$(".formButton").addClass("justify-content-around");
			$(".formButton").removeClass("justify-content-center");
		}
	}	
	
//	確認表單內容是否遵照正確格式
	function checkForm() {
		const nameRule = /^[\u4e00-\u9fa5_a-zA-Z]+$/;
		
		const telRule = /^\d+$/; // 電話確認是否為數字
		const telRule1 = /^09\d{8}$/;  // 手機號碼規則 開頭09 後續接8個任意數字
		// 一般市話規則 0加上1~3個數字區碼 後續接7~8個任意數字
		const telRule2 = /^02|03|037|04|049|05|06|07|08|082|089|0836\d{7,8}$/;
		
		const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
		
		let checkNum = 0;
		let actualNum = $("form p").length;
		
		if( $("#name").val() == "") {
			$("#nameHelp").show();
			$("#nameHelp").text("請填寫名字");
		} else if( !$("#name").val().match(nameRule)) {
			$("#nameHelp").show();
			$("#nameHelp").text("名字需為中文/英文且不可包含數字及特殊字元");
		} else {
			$("#nameHelp").hide();
			$("#nameHelp").text("");
			checkNum++;
		}
		
		if( $("#tel").val() == "" ) {
			$("#telHelp").show();
			$("#telHelp").text("請填寫聯繫電話");
		} else if(!$("#tel").val().match(telRule)){
			$("#telHelp").show();
			$("#telHelp").text("聯繫電話僅能輸入數字");
		} else if( !$("#tel").val().match(telRule1) && !$("#tel").val().match(telRule2)) {
			$("#telHelp").show();
			$("#telHelp").text("電話格式錯誤");
		} else {
			$("#telHelp").hide();
			$("#telHelp").text("");
			checkNum++;
		}
		
		if( $("#email").val() == "") {
			$("#emailHelp").show();
			$("#emailHelp").text("請填寫電子信箱");
		} else if( !$("#email").val().match(emailRule)) {
			$("#emailHelp").show();
			$("#emailHelp").text("電子信箱格式錯誤，請確認");
		} else {
			$("#emailHelp").hide();
			$("#emailHelp").text("");
			checkNum++;
		}
		
		if( $("#select").val() == "") {
			$("#selectHelp").show();
			$("#selectHelp").text("請選擇相關內容");
		} else {
			$("#selectHelp").hide();
			$("#selectHelp").text("");
			checkNum++;
		}
		
		if( $("#message").val() == "") {
			$("#messageHelp").show();
			$("#messageHelp").text("留言為空白");
		} else {
			$("#messageHelp").hide();
			$("#messageHelp").text("");
			checkNum++;
		}
		
		if(actualNum == checkNum) {
			formAjax();
		}
		
	}
	

	function formAjax() {
		let name = $("#name").val();
		let tel = $("tel").val();
		let email = $("email").val();
		let select = $("select").val();
		let message = $("message").val();
		
		$.ajax({
			url: "",
			method: "POST",
			data: {
				"name": name,
				"tel": tel,
				"email": email, 
				"select": select,
				"message": message				
			},
			error: function(jqXHR, textStatus, errorThrown) {
				alert(jqXHR.responseText + "\n測試用網頁");
				return false;
			},
			success: function(data) {
				alert('success: ' + data);
			}
		
		});	
	
	}

});