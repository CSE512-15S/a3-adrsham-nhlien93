(function($) {
	$(document).ready(function() {

		var waMap = SimpleMapD3({
			container: '.simple-map-d3-wa-map',
			datasource: 'example-data/wa_county.geojson',
			mapOffset: [40, 0],
			legendWidth: '100px',
			projection: 'mercator',
			colorScale: 'linear',
			colorOn: true,
			colorSet: 'RdYlBu',
			colorReverse: true,
			colorProperty: 'pop_' + document.getElementById("currentYear").innerHTML,
			tooltipContent: function(d) {
				var p = d.properties;
				return '<h5>' + p.county + '</h5>' +
					   '<h6>Popupation: ' + p.pop_1990.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</h6>';
			},
			legendFormatter: d3.format(',f0')
		});
		
		document.getElementById("currentYear").style.fontSize = "24pt";
		//add a change listener to the slider
		//this function will be called "everytime" the slider value changes
		$("#yearSelector").on("input", function() {
			//log value to console
			//console.log(this.value);
			//change the value that displays current value of slider
			$("#currentYear").html(this.value);	
			waMap.colorProperty ='pop_' + document.getElementById("currentYear").innerHTML;
			console.log(waMap.colorProperty);
			waMap.drawCanvas()
      .drawGlobe()
      .drawGraticule()
      .drawMap();
			//TODO: more code here to update map

		});
		
		
	});
})(jQuery);