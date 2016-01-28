

// store the city names in a variable of type array
// when the user clicks the dropdown, cycle through the array and display all the index values
// detect which array index the user clicks on
// detect the value of the index and display it in the text field
// detect a click of "submit" or enter button
// if "city name" update the background image to "city name"
// clear the text field




$('document').ready(function() {

var selectCity = ['NYC', 'SF', 'LA', 'ATX', 'SYD']

function populateCities(selectCity) {
  $.each(selectCity, function(index, value) {
    $('.city-type').append("<option>" + value + "</option>");
  });
}

populateCities(selectCity);

$('.city-type').change(changeBackground());

// $('.city-type').change(function(){
//   $(this).val();
// })

function changeBackground() {
var city = $(this).val();
console.log(city);
  if ( city === selectCity[0]) {
    console.log("it's all nyc"); //make sure the logic to detect variations of "new york" are correct
    $('body').removeClass('sf');
    $('body').removeClass('la');
    $('body').removeClass('austin');
    $('body').removeClass('sydney');
    $('body').addClass('nyc');
  }
  else if ( city === "san francisco" || city === "sf" || city === "bay area" ) {
    console.log("it's all sf"); //make sure the logic to detect variations of "sf" are correct
    $('body').removeClass('la');
    $('body').removeClass('austin');
    $('body').removeClass('sydney');
    $('body').addClass('sf');
  }
  else if ( city === "los angeles" || city === "la" || city === "lax" ) {
    console.log("it's all la"); //make sure the logic to detect variations of "la" are correct
    $('body').removeClass('austin');
    $('body').removeClass('sydney');
    $('body').addClass('la');
  }
  else if ( city === "austin" || city === "atx" ) {
    console.log("it's all austin"); //make sure the logic to detect variations of "austin" are correct
    $('body').removeClass('sydney');
    $('body').addClass('austin');
  }
  else if ( city === "sydney" || city === "syd" ) {
    console.log("it's all sydney"); //make sure the logic to detect variations of "syd" are correct
    $('body').addClass('sydney');
  }
  else {

  }
}




}) // end document ready
