document.addEventListener("DOMContentLoaded", function() {


  $('#phone_1').mask('+7 (999) 999-9999')
  $('#phone_2').mask('+7 (999) 999-9999')
  $('#phone_3').mask('+7 (999) 999-9999')
  $('#phone_4').mask('+7 (999) 999-9999')
  $('#phone_5').mask('+7 (999) 999-9999')


  $(".owl-carousel").owlCarousel({
    items : 2,
    nav: true,
    responsive : {
      576 : {
        items : 3,
      },
      768 : {
        items : 2,
      }
    }
  });


  $('.thx').click(function(){
    $('.thx').css('display','none')
    $('.overlay-thx').css('display','none')
  });

  $('.overlay-thx').click(function(){
    $('.thx').css('display','none')
    $('.overlay-thx').css('display','none')
  });


  $('.button-sub').click(function(){
    $('.popup').css('display','block')
    $('.overlay-popup').css('display','block')
  });

  $('.system-item-button').click(function(){
    $('.popup').css('display','block')
    $('.overlay-popup').css('display','block')
  });



  $('.popup-closed').click(function(){
    $('.popup').css('display','none')
    $('.overlay-popup').css('display','none')
  });

  $('.overlay-popup').click(function(){
    $('.popup').css('display','none')
    $('.overlay-popup').css('display','none')
  });


  $('#project_1').click(function(){
    $('.active').removeClass('active')
    $('#project_1').addClass('active')
    $('.project-item-prev-img img').removeAttr('src')
    $('.project-item-prev-img img').attr('src','https://picsum.photos/68/68?random=1')
    $('.project-item-prev-text span').html('Пентхаус')
  });

  $('#project_2').click(function(){
    $('.active').removeClass('active')
    $('#project_2').addClass('active')
    $('.project-item-prev-img img').removeAttr('src')
    $('.project-item-prev-img img').attr('src','https://picsum.photos/68/68?random=2')
    $('.project-item-prev-text span').html('Дома')
  });

  $('#project_3').click(function(){
    $('.active').removeClass('active')
    $('#project_3').addClass('active')
    $('.project-item-prev-img img').removeAttr('src')
    $('.project-item-prev-img img').attr('src','https://picsum.photos/68/68?random=3')
    $('.project-item-prev-text span').html('Бассейны')
  });

  $('#project_4').click(function(){
    $('.active').removeClass('active')
    $('#project_4').addClass('active')
    $('.project-item-prev-img img').removeAttr('src')
    $('.project-item-prev-img img').attr('src','https://picsum.photos/68/68?random=4')
    $('.project-item-prev-text span').html('Коммерческие')
  });

  $('#project_5').click(function(){
    $('.active').removeClass('active')
    $('#project_5').addClass('active')
    $('.project-item-prev-img img').removeAttr('src')
    $('.project-item-prev-img img').attr('src','https://picsum.photos/68/68?random=5')
    $('.project-item-prev-text span').html('Промышленные')
  });

  $('#project_1_1').click(function(){
    $('.active-prev').removeClass('active-prev')
    $('#project_1_1').addClass('active-prev')
    $('.project-item-img img').removeAttr('src')
    $('.project-item-img img').attr('src','https://picsum.photos/547/288?random=1')
  });

  $('#project_1_2').click(function(){
    $('.active-prev').removeClass('active-prev')
    $('#project_1_2').addClass('active-prev')
    $('.project-item-img img').removeAttr('src')
    $('.project-item-img img').attr('src','https://picsum.photos/547/288?random=2')
  });

  $('#project_1_3').click(function(){
    $('.active-prev').removeClass('active-prev')
    $('#project_1_3').addClass('active-prev')
    $('.project-item-img img').removeAttr('src')
    $('.project-item-img img').attr('src','https://picsum.photos/547/288?random=3')
  });

  $('#project_1_4').click(function(){
    $('.active-prev').removeClass('active-prev')
    $('#project_1_4').addClass('active-prev')
    $('.project-item-img img').removeAttr('src')
    $('.project-item-img img').attr('src','https://picsum.photos/547/288?random=4')
  });



});
