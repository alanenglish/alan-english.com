$(document).ready(function() {

  // STICKY NAVIGATION //

  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '62px'
  });

});
