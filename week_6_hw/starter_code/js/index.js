$(document).ready(function() {
  
$('.readmore a').click(function(){
    event.preventDefault();
    $('.readmore').hide();
    $('.show-this-on-click').slideDown();
    $('.readless').show();
});

$('.readless a').click(function(){
    event.preventDefault();
    $('.readless').hide();
    $('.show-this-on-click').slideUp();
    $('.readmore').show('slow');
});

$('.sidebar p a').click(function(){
    event.preventDefault();
    $('.learnmoretext').slideDown();
    $('.learnmore').slideDown();
    $('.learnmore').hide();
});


});
