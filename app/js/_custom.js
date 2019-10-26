document.addEventListener("DOMContentLoaded", function() {




  $(".owl-carousel").owlCarousel({
    items : 1
  });



  $('.button').click(function(){
  $('.wrapper').css('display','block');
  });

  $('.closed').click(function(){
  $('.wrapper').css('display','none');
  });
  
  $('.sub').click(function(){
  $('.wrapper').css('display','none');
  });

});
