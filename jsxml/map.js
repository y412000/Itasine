var map;
function initMap(){
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: -25.363, lng: 131.044},
	zoom: 5,
	}); 
						
	var marker = new google.maps.Marker({
		position: {lat: -25.363, lng: 131.044},
		map: map
	});
						
	var points = [
		{lat: -35.1827, lng: 149.07279},
		{lat: -33.51359, lng: 151.1240},
		{lat: -37.4849, lng: 144.5747}
	]

	var polyline = new google.maps.Polyline({
		path: points,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});

	polyline.setMap(map);
}