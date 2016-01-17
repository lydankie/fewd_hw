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
      $('.container').addClass('blue-background')
    } else if (60 < fah < 80) {
      $('.container').addClass('orange-background')
    } else {
      $('.container').addClass('red-background')
    }
  }

});
// end javascript
