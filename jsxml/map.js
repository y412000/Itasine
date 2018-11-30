let map = [];
let marker = [];
let contentString = [];
let infowindow = [];

function initMap(){
	for( let i = 0; i < shopLocation.length; i++){
		map[i] = new google.maps.Map(document.getElementsByClassName("locaMap")[i], {
			center: {lat: shopLocation[i].lat, lng: shopLocation[i].lng},
			zoom: 16,
			zoomControlOptions: {
				style:google.maps.ZoomControlStyle.SMALL,//小按鈕 可選LARGE
				position:google.maps.ControlPosition.TOP_RIGHT //放右上方
			},
			mapTypeControl: false,
			
			styles:
			[
			  {
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#ebe3cd"
				  }
				]
			  },
			  {
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#523735"
				  }
				]
			  },
			  {
				"elementType": "labels.text.stroke",
				"stylers": [
				  {
					"color": "#f5f1e6"
				  }
				]
			  },
			  {
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
				  {
					"color": "#c9b2a6"
				  }
				]
			  },
			  {
				"featureType": "administrative.land_parcel",
				"elementType": "geometry.stroke",
				"stylers": [
				  {
					"color": "#dcd2be"
				  }
				]
			  },
			  {
				"featureType": "administrative.land_parcel",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#ae9e90"
				  }
				]
			  },
			  {
				"featureType": "landscape.natural",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#dfd2ae"
				  }
				]
			  },
			  {
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#dfd2ae"
				  }
				]
			  },
			  {
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#93817c"
				  }
				]
			  },
			  {
				"featureType": "poi.business",
				"stylers": [
				  {
					"visibility": "off"
				  }
				]
			  },
			  {
				"featureType": "poi.park",
				"elementType": "geometry.fill",
				"stylers": [
				  {
					"color": "#a5b076"
				  }
				]
			  },
			  {
				"featureType": "poi.park",
				"elementType": "labels.text",
				"stylers": [
				  {
					"visibility": "off"
				  }
				]
			  },
			  {
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#447530"
				  }
				]
			  },
			  {
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#f5f1e6"
				  }
				]
			  },
			  {
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#fdfcf8"
				  }
				]
			  },
			  {
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#f8c967"
				  }
				]
			  },
			  {
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
				  {
					"color": "#e9bc62"
				  }
				]
			  },
			  {
				"featureType": "road.highway.controlled_access",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#e98d58"
				  }
				]
			  },
			  {
				"featureType": "road.highway.controlled_access",
				"elementType": "geometry.stroke",
				"stylers": [
				  {
					"color": "#db8555"
				  }
				]
			  },
			  {
				"featureType": "road.local",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#806b63"
				  }
				]
			  },
			  {
				"featureType": "transit.line",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#dfd2ae"
				  }
				]
			  },
			  {
				"featureType": "transit.line",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#8f7d77"
				  }
				]
			  },
			  {
				"featureType": "transit.line",
				"elementType": "labels.text.stroke",
				"stylers": [
				  {
					"color": "#ebe3cd"
				  }
				]
			  },
			  {
				"featureType": "transit.station",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#dfd2ae"
				  }
				]
			  },
			  {
				"featureType": "water",
				"elementType": "geometry.fill",
				"stylers": [
				  {
					"color": "#b9d3c2"
				  }
				]
			  },
			  {
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#92998d"
				  }
				]
			  }
			]
		}); 
		
		marker[i] = new google.maps.Marker({
			position: {lat: shopLocation[i].lat, lng: shopLocation[i].lng},
			map: map[i], 
			title: shopLocation[i].name,
		});
		
		marker[i].setMap(map[i]);
		
		contentString[i] = "<div class='mapInfo'>" + 
			"\t<h5>Itasine " + shopLocation[i].name + "</h5>\n" + 
			"\t<p>地址：" + shopLocation[i].address + "</p>\n" + 
			"\t<p>電話：" + shopLocation[i].tel + "</p>\n" + 
			"</div>"

		infowindow[i] = new google.maps.InfoWindow({
		  content: contentString[i]
		});

		marker[i].addListener('click', function() {
		  infowindow[i].open(map[i], marker[i]); //設定點選 marker 打開資訊視窗事件
		});
	}
	

}