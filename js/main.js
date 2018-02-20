$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});



$(document).ready(function() {
       $(".g").fadeIn(2500);
});



  //    $(window).load(function() {
  //    $('.loading').hide();
  // });

        setTimeout(function() {
          $('.loading').hide();
        }, 1500);

        setTimeout(function() {
          $('.everything').fadeIn(600);
          $('.everything').show();
        }, 1800);


// $(document).ready(function() {

// $('body').css('display', 'none');

// $('body').fadeIn(1000);



