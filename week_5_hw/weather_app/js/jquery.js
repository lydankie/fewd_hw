$(document).ready(function() {

  $('.form').submit(convertToFah);


  function convertToFah (evt){
    evt.preventDefault();
    $('.container').removeClass('blue-background');
    $('.container').removeClass('orange-background');
    $('.container').removeClass('red-background');

    var celciusTemp = $('.celcius-input').val();
    var fah = celciusTemp*1.8 + 32
    $('.display-result').text(fah);
    console.log(fah)

    if (fah < 60) {
      $('.container').removeClass('red-background')
      $('.container').removeClass('orange-background')
      $('.container').addClass('blue-background')
    }
    else if ( 80 >= fah && fah >= 60) {
      // $('.container').removeClass('red-background')
      $('.container').addClass('orange-background')
    }
    else if (fah > 80){
      $('.container').addClass('red-background')
    }
    else {

    }
  }

});
// end javascript
