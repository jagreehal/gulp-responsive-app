/*global google:false */
/*global initialize:false */
/*global marker:false */
function initialize(){
	var mapOptions = {
		zoom: 15,
		center: new google.maps.LatLng(52.205337000000000000, 0.121816999999964540)
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);

	new google.maps.Marker({
		position: new google.maps.LatLng(52.205337000000000000, 0.121816999999964540),
		map: map,
		title: "Socket Shop!"
	});
}

function loadMap(){
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
		'callback=initialize';
	document.body.appendChild(script);
}

document.getElementById('show-map-button').addEventListener('click', function(){
	this.style.display='none';
	document.getElementById('map-canvas').style.display='block';
	loadMap();
});
