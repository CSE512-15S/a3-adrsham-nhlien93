(function($) {
        $(document).ready(function() {
		  var waMap = SimpleMapD3({
            container: '.simple-map-d3-wa-map',
            datasource: 'example-data/wa_county.geojson',
            projection: 'mercator',
			colorOn: true,
            colorSet: 'BuGn',
			colorProperty: 'pop_2014',
            legendFormatter: d3.format(',f0')
          });
	/*	  
          var mnPopMap = SimpleMapD3({
            container: '.simple-map-d3-mn-pop-map',
            datasource: 'example-data/mn-county-2010.geo.json',
            colorOn: true,
            colorProperty: 'POPULATION',
            legendFormatter: d3.format(',f0')
          });

          var usMap = SimpleMapD3({
            container: '.simple-map-d3-us-map',
            datasource: 'example-data/us-counties.topo.json',
            tooltipOn: false,
            styles: {
              stroke: '#EDEDED',
              fill: '#232323'
            }
          });

          var europePopMap = SimpleMapD3({
            container: '.simple-map-d3-europe-pop-map',
            datasource: 'example-data/europe-population-density-geocommons.geo.json',
            colorSet: 'Spectral',
            colorOn: true,
            colorProperty: 'population',
            colorReverse: true,
            projection: 'azimuthalEqualArea',
            rotation: [0, 0, -20],
            canvasDragOn: true,
            tooltipContent: function(d) {
              var p = d.properties;
              return '<h5>' + p.country + '</h5>' +
                p.population + ' population per square kilometer';
            }
          });

          var worldMap = SimpleMapD3({
            container: '.simple-map-d3-world-map',
            datasource: 'example-data/world-population.geo.json',
            projection: 'equirectangular',
            colorOn: true,
            colorProperty: 'POP2005',
            colorSet: 'Paired',
            colorScale: 'quantize',
            tooltipOn: true,
            graticuleOn: true,
            globeOn: true,
            legendOn: false,
            startManually: true
          }).start();*/
        });
      })(jQuery);