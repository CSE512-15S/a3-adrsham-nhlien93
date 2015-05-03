/**
 * using the simple-map-d3 library we draw the map and then edited the file so that it would
 * work for our visualization.
 */

(function($) {
	$(document).ready(function() {
		//draw the map for 1990
		var waMap = SimpleMapD3({
			container: '.simple-map-d3-wa-map-1990',
			datasource: 'data/wa_county.geojson', 
			mapOffset: [50, 0],
			legendWidth: 200,
			projection: 'mercator',
			colorScale: 'log',
			colorOn: true,
			colorSet: 'Custom',
			colorProperty: 'pop_1990',
			year: 1990
		});

    for (i=1991; i <=2014; i++) {
      $(".simple-map-d3-wa-map-" + i).addClass("transparent");
    }

		//draw the rest of the maps until 2014, adding an event that fires when the drawing is done
		for (i=1991; i <= 2014; i++) {
			var waMap = SimpleMapD3({
				container: '.simple-map-d3-wa-map-' + i,
				datasource: 'data/wa_county.geojson',
				mapOffset: [50, 0],
				legendWidth: 200,
				projection: 'mercator',
				colorScale: 'log',
				colorOn: true,
				colorSet: 'Custom',
				colorProperty: 'pop_' + i,
				//add new variable year to object
				year: i
			});

			//when the drawing is done, hide the div
			waMap.events.on('rendered.YOUR_NAMESPACE', function(smd) {
				//console.log(smd.options.year);
        $(".simple-map-d3-wa-map-" + smd.options.year).removeClass("transparent");
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