$('document').ready(function() {

$('form').submit(detectCity); // run detectCity function if user clicks "enter" on keyboard
$('.submit-btn').click(detectCity); // run detectCity function if user clicks "Update" button

function detectCity (evt) {
  evt.preventDefault();
  var city = $('.city-type').val().trim().toLowerCase(); // store the user's input into variable "city"
  console.log(city); // make sure proper value is stored in "city" variable

  $('.city-type').val('');

  if ( city === "new york" || city === "new york city" || city === "nyc" ) {
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

}); //end document ready
