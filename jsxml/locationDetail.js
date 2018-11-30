


let locationTxt = "";

for( let i = 0; i< shopLocation.length; i++){
	locationTxt += "<div class='shop row'>\n" + 
		"\t<div class='col-md-1'></div>" + 
		"\t<div class='locaCtn col-12 col-md-5'>\n" + 
		"\t\t<h3>" + shopLocation[i].name + "</h3>\n" + 
		"\t\t<p>地址：" + shopLocation[i].address + "</p>\n" + 
		"\t\t<p>連絡電話：" + shopLocation[i].tel + "</p>\n" + 
		"\t\t<p>營業時間：<br>" + shopLocation[i].biztime + "</p>\n";
	if(shopLocation[i].remark != "") {
		locationTxt += "\t\t<p>備註：<br>" + shopLocation[i].remark + "</p>\n";
	}
	
	locationTxt += "\t</div>\n" + 
		"\t<div class='locaMap col-12 col-md-5'></div>\n" + 
		"</div>\n\n";
}

console.log(locationTxt);
document.getElementById("location").innerHTML = locationTxt;