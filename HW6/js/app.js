//wait for the DOM elements to load before executing
$(document).ready(function() {
  //prevent the submit button from refreshing the page
  $('#submit-btn').click(function(){
    event.preventDefault();
    //get the value of the #city-type input and correct for capitalization
    var cityType = $("#city-type").val();
    cityType = cityType.toLowerCase().trim();
    // if the user inputs New York City / NYC / New York change the CSS class to 'nyc'
    if (cityType == "New York City" || cityType == "NYC" || cityType == "New York")
    { $(".container div").attr("body", "nyc");} 
    // if the user inputs SF/San Francisco/Bay Area change the CSS class to 'sf'
    else if cityType == "San Francisco" || cityType == "SF" || cityType == "Bay Area")
    { $(".container div").attr("body", "sf");} 
    // if the user inputs Austin/ATX change the CSS class to 'austin'
    else if cityType == "Austin" || cityType == "ATX")
    { $(".container div").attr("body", "austin");} 
    // if the user inputs Los Angeles/LA/LAX change the CSS class to 'la'
    else if cityType == "Los Angeles" || cityType == "LA" || cityType == "LAX")
    { $(".container div").attr("body", "la");} 
    // if the user inputs Sydney/SYD change the CSS class to 'sydney'
    else if cityType == "Sydney" || cityType == "SYD")
    { $(".container div").attr("body", "sydney");} 
  });
});