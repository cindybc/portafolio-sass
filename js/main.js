$(document).ready(function(){
	  $(window).scroll(function() {
        $('#nav2').toggleClass('cambioNav', $(this).scrollTop() > $('#nav2').height());
      });
    
  $(".button-collapse").sideNav();

  $('.carousel.carousel-slider').carousel();    
   
  $('.parallax').parallax();
   
       
})