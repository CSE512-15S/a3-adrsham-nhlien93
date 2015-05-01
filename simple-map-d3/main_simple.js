(function($) {
	$(document).ready(function() {

    //draw the map for 1990
    var waMap = SimpleMapD3({
      container: '.simple-map-d3-wa-map-1990',
      datasource: 'example-data/wa_county.geojson',
      mapOffset: [40, 0],
      legendWidth: '100px',
      projection: 'mercator',
      colorScale: 'linear',
      colorOn: true,
      colorSet: 'RdYlBu',
      colorReverse: true,
      colorProperty: 'pop_1990',
      year: 1990, 
      tooltipContent: function(d) {
        var p = d.properties;
        return '<h5>' + p.county + '</h5>' +
             '<h6>Popupation: ' + p.pop_1990.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</h6>';
      },
      legendFormatter: d3.format(',f0')
      });

    //draw the rest of the maps until 2014, adding an event that fires when the drawing is done

    for (i=1991; i <= 2014; i++) {
      var waMap = SimpleMapD3({
      container: '.simple-map-d3-wa-map-' + i,
      datasource: 'example-data/wa_county.geojson',
      mapOffset: [40, 0],
      legendWidth: '100px',
      projection: 'mercator',
      colorScale: 'linear',
      colorOn: true,
      colorSet: 'RdYlBu',
      colorReverse: true,
      colorProperty: 'pop_' + i,
      //add new variable year to object
      year: i,
      tooltipContent: function(d) {
        var p = d.properties;
        return '<h5>' + p.county + '</h5>' +
             '<h6>Popupation: ' + p.pop_1990.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</h6>';
      },
      legendFormatter: d3.format(',f0')
      });

      //when the drawing is done, hide the div
      waMap.events.on('rendered.YOUR_NAMESPACE', function(smd) {
        console.log(smd.options.year);
        $(".simple-map-d3-wa-map-" + smd.options.year).addClass("hidden");
      });

    }

		//add a change listener to the slider
		//this function will be called "everytime" the slider value changes
		$("#yearSelector").on("input", function() {
			//grab the current year, save as prev
      var prev = $("#currentYear").html();
      //hide the div for the prev year
      $(".simple-map-d3-wa-map-"+prev).addClass("hidden");
      //change the value that displays current value of slider
			$("#currentYear").html(this.value);	
      //unhide the current year's div
      $(".simple-map-d3-wa-map-"+this.value).removeClass("hidden");
		});
	});
})(jQuery);