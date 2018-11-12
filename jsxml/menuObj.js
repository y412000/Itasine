let salad = [], soup = [], maindish = [], drink = [], dessert =[], set = [];

/***** Salad  餐點資訊        *****
****** eName: 英文餐點名      *****
****** cName: 中文餐點名      *****
****** url: 該餐點的圖片位置   *****
****** price: 餐點價格        *****/

salad[0] = {
	eName: "Caesar Salad",
	cName: "凱薩沙拉",
	url: "/salad/凱薩沙拉.jpeg",
	price: 200
};

salad[1] = {
	eName: "Shrimp Salad",
	cName: "冷蝦沙拉",
	url: "/salad/冷蝦沙拉.jpeg",
	price: 250
};

salad[2] = {
	eName: "Chicken Avocado Salad",
	cName: "雞胸酪梨",
	url: "/salad/雞胸酪梨.jpeg",
	price: 200
};

salad[3] = {
	eName: "Salmon Salad",
	cName: "鮭魚野菜",
	url: "/salad/鮭魚野菜.jpeg",
	price: 250
};

/***** Soup  餐點資訊*****/

soup[0] = {
	eName: "Pumpkin Cream Soup",
	cName: "南瓜濃湯",
	url: "/soup/南瓜濃湯.jpeg",
	price: 80
};
	
soup[1] = {
	eName: "Minestrone Soup",
	cName: "蔬菜湯",
	url: "/soup/蔬菜湯.jpg",
	price: 80
};

soup[2] = {
	eName: "Shrimp Mushroom Soup",
	cName: "鮮蝦野菌湯",
	url: "/soup/鮮蝦野菌湯.jpeg",
	price: 100
};

/***** MainDish  餐點資訊*****/

maindish[0] = {
	eName: "Spaghetti Bolognese",
	cName: "番茄肉醬義大利麵",
	url: "/main/番茄肉醬.jpg",
	price: 200
};
	
maindish[1] = {
	eName: "Spaghetti with Shrimp in Tomato Sauce",
	cName: "番茄鮮蝦義大利麵",
	url: "/main/番茄鮮蝦.jpeg",
	price: 300
};

maindish[2] = {
	eName: "Spaghetti Carbonara",
	cName: "奶油培根義大利麵",
	url: "/main/奶油培根.jpeg",
	price: 180 
};

maindish[3] = {
	eName: "Spaghetti with Shrimp in Pesto Sauce",
	cName: "海鮮羅勒義大利麵",
	url: "/main/海鮮羅勒.jpeg",
	price: 250
};

maindish[4] = {
	eName: "Fettuccine Alfredo",
	cName: "奶油羅勒寬麵",
	url: "/main/起司羅勒.jpeg",
	price: 220
};

maindish[5] = {
	eName: "Squid Ink Pasta with Octopus",
	cName: "香蒜墨魚義大利麵",
	url: "/main/香蒜墨魚.jpg",
	price: 300
};

maindish[6] = {
	eName: "Pasta Salad",
	cName: "鮮蔬義大利麵",
	url: "/main/清爽鮮蔬.jpg",
	price: 230
};

maindish[7] = {
	eName: "Linguine with Clam",
	cName: "蛤蠣義大利麵",
	url: "/main/白酒蛤蠣.jpeg",
	price: 250
};

maindish[8] = {
	eName: "Margherita",
	cName: "瑪格麗特比薩",
	url: "/main/瑪格麗特.jpg",
	price: 250
};

maindish[9] = {
	eName: "Crudo Pizza",
	cName: "起司火腿比薩",
	url: "/main/起司火腿.jpeg",
	price: 250
};

maindish[10] = {
	eName: "Pepperoni Pizza",
	cName: "義式香腸比薩",
	url: "/main/義式香腸.jpeg",
	price: 250
};

/***** Drink  餐點資訊*****/

drink[0] = {
	eName: "Lemonade",
	cName: "檸檬水",
	url: "/drink/檸檬水.jpg",
	price: 50
};

drink[1] = {
	eName: "Raspberry Water",
	cName: "野莓水",
	url: "/drink/野莓水.jpg",
	price: 80
};

drink[2] = {
	eName: "Orange Juice",
	cName: "柳丁汁",
	url: "/drink/柳丁汁.jpg",
	price: 100
};

drink[3] = {
	eName: "Fibre Juice",
	cName: "特調蔬果汁",
	url: "/drink/特調蔬果汁.jpg",
	price: 150
};

drink[4] = {
	eName: "Tea with mint",
	cName: "薄荷紅茶",
	url: "/drink/薄荷紅茶.jpg",
	price: 80
};

drink[5] = {
	eName: "Rose Tea",
	cName: "玫瑰茶",
	url: "/drink/玫瑰茶.jpg",
	price: 150
};

drink[6] = {
	eName: "Chamomile Tea",
	cName: "洋甘菊茶",
	url: "/drink/洋甘菊茶.jpg",
	price: 150
};

drink[7] = {
	eName: "Espresso",
	cName: "義式濃縮咖啡",
	url: "/drink/義式濃縮.jpg",
	price: 130
};

drink[8] = {
	eName: "Americano",
	cName: "美式咖啡",
	url: "/drink/美式咖啡.jpg",
	price: 100
};

drink[9] = {
	eName: "Cappuccino",
	cName: "卡布奇諾",
	url: "/drink/卡布奇諾.jpg",
	price: 130
};

drink[10] = {
	eName: "Hot Cocoa with Marshmallow",
	cName: "棉花可可",
	url: "/drink/棉花可可.jpg",
	price: 150
};

/***** Dessert  餐點資訊*****/

dessert[0] = {
	eName: "Tiramisu",
	cName: "提拉米蘇",
	url: "/dessert/提拉米蘇.jpg",
	price: 120
};

dessert[1] = {
	eName: "Coffee Crepe",
	cName: "咖啡薄卷",
	url: "/dessert/咖啡薄卷.jpg",
	price: 120
};

dessert[2] = {
	eName: "Orange Panna Cotta",
	cName: "香橙奶酪",
	url: "/dessert/香橙奶酪.jpg",
	price: 80
};

dessert[3] = {
	eName: "Strawberry Cheesecake",
	cName: "草莓起司蛋糕",
	url: "/dessert/草莓起司.jpg",
	price: 120
};

dessert[4] = {
	eName: "Raspberry Pie",
	cName: "野莓塔",
	url: "/dessert/野莓塔.jpg",
	price: 150
};

dessert[5] = {
	eName: "Raspberry Hotcake",
	cName: "野莓鬆餅",
	url: "/dessert/野莓鬆餅.jpg",
	price: 180
};

/***** Dessert  餐點資訊*****/
set[0] = {
	eName: "SET MENU FOR LUNCH",
	cName: "商業午餐",
	content: "任選菜單內 - 湯品一份、主餐一份即贈香橙奶酪一份", 
	remark: "主餐限定 NT$230  以下之商品",
	price: 300
};

set[1] = {
	eName: "SET MENU FOR TWO",
	cName: "雙人套餐",
	content: "任選菜單內 - 沙拉一份、湯品兩份、主餐兩份、飲品或甜點共兩份", 
	remark: "套餐飲品及甜點僅供選擇 NT$150 以下之商品",
	price: 1000
};

set[2] = {
	eName: "SET MENU FOR FOUR",
	cName: "四人套餐",
	content: "任選菜單內 - 沙拉兩份、湯品四份、主餐四份、飲品或甜點共四份", 
	remark: "套餐飲品及甜點僅供選擇 NT$150 以下之商品",
	price: 2000
};