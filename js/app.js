// from data.js
var tableData = data;

// LEVEL 1, STEP 1 - POPULATE TABLE
var tbody = d3.select("tbody");

all_data = tableData.forEach((UFO_data) => {
    var row = tbody.append("tr");
    Object.entries(UFO_data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
// LEVEL 2 - BONUS

//Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters 
//and search for UFO sightings using the following criteria based on the table columns:
// date/time
// city
// state
// country
// shape

// Select the button - It is unique in the html
var button = d3.select("#filter-btn");

button.on("click", function() {

    // clear table input from the first call that happens on page load due to function on Part 1
    tbody.html("");

    // Select the input elements and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape= d3.select("#shape");
  
    // Get the value property of each input element
    var inputValueDate = inputDate.property("value");
    var inputValueCity = inputCity.property("value");
    var inputValueState = inputState.property("value");
    var inputValueCountry = inputCountry.property("value");
    var inputValueShape = inputShape.property("value");
  
    // var filteredData = tableData.filter(record => record.datetime == inputValueDate 

  if (inputValueDate !== 0 || inputValueCity !== 0 || 
    inputValueState !== 0 || inputValueCountry !== 0|| inputValueShape !== 0) {
      var filteredData = tableData.filter(function(multiple_filter) {
      return (
        (multiple_filter.datetime == inputValueDate || inputValueDate.length === 0) && 
        (multiple_filter.city == inputValueCity || inputValueCity.length === 0) && 
        (multiple_filter.state == inputValueState || inputValueState.length === 0) && 
        (multiple_filter.country == inputValueCountry || inputValueCountry.length === 0) && 
        (multiple_filter.shape == inputValueShape || inputValueShape.length === 0)
      );
      });
          }
  else {
    var filterData = tableData;
    };
  

    filteredData.forEach((UFO_data) => {
        var row = tbody.append("tr");
        Object.entries(UFO_data).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
});
