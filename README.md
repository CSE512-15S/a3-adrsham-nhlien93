# a3-adrsham-nhlien93

##Team Members
1. Adrian Sham adrsham@uw.edu
2. Hoang-Lien Nguyen nhlien93@uw.edu

##Where are the people in Washington

##Running Instructions

Access our visualization at http://cse512-15s.github.io/a3-adrsham-nhlien93/ 
or
download this repository and run `python -m SimpleHTTPServer 9000` / `python -m http.server 9000` (python 3+). Access our visualization at http://localhost:9000

##Story Board

Our Story Board can be downloaded [here](https://github.com/CSE512-15S/a3-adrsham-nhlien93/blob/master/Storyboard.pdf?raw=true)

###Changes between Storyboard and the Final Implementation

A quick overview of the changes between the storyboard and the final implementation is the inclusion of city population in the map, in the form of circles with a radius corresponding to the population. We also changed the color representation from the storyboard.

##Development Process

During the initial stages of the project, we worked together to figure out how we
would write code for the visualization and did research on the various examples
available. After that, we were able to split some of the work by functionality.

Adrian was the one that got the storyboard put together after we agreed on what
we wanted verbally. Adrian also worked on getting the city mark and labels on
the map, then modified it to display tooltips with city name instead. He had to
combine and filter data so that the correct cities for Washington state could be
displayed with the correct labels and in the right location. He also added the slider
for the web page which allows the map the change to show the difference in
population over different years.

Lindsey modified Simple Map D3 so that the color of the counties were based on
an interpolation of a log scale and worked on the legend so that it would have the
correct color mapping. She also added code so that the tooltips appeared next to
the pointer, which provides a better user experience. She modified the marks on
the city to become a circle with varying radius based on the population of the city.

Since our original data set for the location of cities did not have all the cities in
Washington, Lindsey wrote two Python script that parsed the other cities and
combined cities that belonged in two counties into one.

We estimate that we spent at least 60 man hours on this project. Since we were
both new to this language, trying to express what we wanted to do in code was
the most difficult part of the project. Also, we were using some libraries available
online to create choropleth maps, however, since it did not have all the
functionality we wanted, we had to go through the code and modify it ourselves.
