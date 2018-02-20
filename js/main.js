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
       $(".simpjumbo").hide();
       $(".sfjumbo").hide();
       $(".pantryjumbo").hide();
       $(".simonjumbo").hide();
});

$(document).ready(function() {
       $(".simpjumbo").fadeIn(2000);
       $(".sfjumbo").fadeIn(2000);
       $(".pantryjumbo").fadeIn(2000);
       $(".simonjumbo").fadeIn(2000);
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


$(window).scroll(function() {
if ($(this).scrollTop()> 800) {
$('.faded1').fadeIn(1400);
} else {
$('.simp').hide();
}
});

$(window).scroll(function() {
if ($(this).scrollTop()> 1400) {
$('.faded2').fadeIn(1400);
}
});

$(window).scroll(function() {
if ($(this).scrollTop()> 2000) {
$('.faded3').fadeIn(1400);
}
});

$(window).scroll(function() {
if ($(this).scrollTop()> 2600) {
$('.faded4').fadeIn(1400);
}
});
