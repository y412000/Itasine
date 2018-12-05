const menu = [salad, soup, maindish, drink, dessert, set];
const menuCateCn = ["沙拉", "湯品", "主餐", "飲品", "甜點", "套餐"];
const menuCateEn = ["salad", "soup", "maindish", "drink", "dessert", "set"];

let menutxt = '';

for( let i = 0; i < menu.length; i++){
	menutxt += '\t<h2 id="' + menuCateEn[i] + '" class="col-12 text-center">' + menuCateCn[i] + '</h2>\n';
	for ( let j = 0; j < menu[i].length; j++){
		if( i !== menu.length-1){
			menutxt += 
				'\t<div class="menuBlock col-12 col-md-6 col-lg-4">\n' + 
					'\t\t<div class="menuImg"></div>\n' + 
					'\t\t<div class="menuInfo">\n' + 
						'\t\t\t<h5 class="text-center">' + menu[i][j].cName + '</h5>\n' +
						'\t\t\t<h6 class="text-center">' + menu[i][j].eName + '</h6>\n' + 
						'\t\t\t<h5 class="text-center">NT$ ' + menu[i][j].price + '</h5>\n' +
					'\t\t</div>\n\t</div>\n';
		} else {
			menutxt += '\t<div class="menuBlock setBlock col-12">\n' + 
				'\t\t<div class="setInfo">\n' + 
					'\t\t\t<h3 class="text-center">' + menu[i][j].cName + '</h5>\n' +
					'\t\t\t<h6 class="text-center">' + menu[i][j].eName + '</h6>\n' +
					'\t\t\t<div class="setCtn">\n' + 
					'\t\t\t\t<h5>' + menu[i][j].content + '</h5><br>\n' + 
					'\t\t\t\t<h6>備註(Remark)： ' + menu[i][j].remark + '</h6>\n' + 
					'\t\t\t\t<h6>價格(Price)： NT$' + menu[i][j].price + '</h6>\n' +
				'\t\t\t</div>\n\t\t</div>\n\t</div>\n';
		}

	}
}

document.getElementById("menuCtn").innerHTML = menutxt;

let menuImgNum = 0;
for( let i = 0; i < menu.length-1; i++){
	for( let j = 0; j < menu[i].length; j++){
		let img = document.getElementsByClassName("menuImg");

		img[menuImgNum].style.background = 'url("./image/menu' + menu[i][j].url + '") no-repeat';
		img[menuImgNum].style.backgroundPosition = "center";
		img[menuImgNum].style.backgroundSize = "cover";
		menuImgNum++;
	}
}