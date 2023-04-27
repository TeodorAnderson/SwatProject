console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the second tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [40.7, -94.5],
	zoom: 3,
	layers: [streets]
});

// Create a base layer that holds all three maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets,
  "Dark": dark
};
L.control.layers(baseMaps).addTo(map);

// Load the GeoJSON data using D3
d3.json('static/js/us-county-boundaries.geojson').then(function(data) {
  
	// Create a new GeoJSON layer and add it to the map
	var geojsonLayer = L.geoJson(data, {
		style: {
		  color: 'red', // border color
		  weight: 1, // border weight
		  fillOpacity: 0.3 // fill opacity
		},
		onEachFeature: function(feature, layer) {
		  // add a popup to each polygon that displays the county name
		  layer.bindPopup(feature.properties.NAME);
		}
	  }).addTo(map);
		
	

	// Define the color scale for the cancer rates
	function getColor(d) {
		return d > 500 ? '#800026' :
			d > 400 ? '#BD0026' :
			d > 300 ? '#E31A1C' :
			d > 200 ? '#FC4E2A' :
			d > 100 ? '#FD8D3C' :
			'#FEB24C';
	}

	// Add a legend to the map that shows the color scale for the cancer rates
	var legend = L.control({ position: 'bottomright' });

	legend.onAdd = function(map) {
		var div = L.DomUtil.create('div', 'info legend'),
			grades = [0, 100, 200, 300, 400, 500],
			labels = [];

		// loop through the cancer rate intervals and generate a label with a colored square for each interval
		for (var i = 0; i < grades.length; i++) {
			div.innerHTML +=
				'<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
				grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
		}

		return div;
	};

	legend.addTo(map);
});






// Then we add a control to the map that will allow the user to change which
// layers are visible.



