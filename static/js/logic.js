// Store API endpoint as queryURL
var queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to query URL
d3.json(queryURL).then(function (data) {
  createFeatures(data.features);
});

// Determine marker size
function markerSize(magnitude) {
    return magnitude * 2000;
  }
  
  // Determine marker color by depth
  function chooseColor(depth) {
    if (depth < 10) return "red";
    else if (depth < 30) return "orange";
    else if (depth < 50) return "yellow";
    else if (depth < 70) return "green";
    else if (depth < 90) return "blue";
    else return "#violet";
  }