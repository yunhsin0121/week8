$(document).ready(function () {
   // 上滑按鈕
  $('.btn-up').click(function (e) { 
      e.preventDefault();
      $('html,body').animate({
          scrollTop:0},100);
  });
  $('.slide-up').hide();
  $(window).scroll(function(){
      if($(window).scrollTop()>200){
          $('.slide-up').fadeIn();
      }
      else{
          $('.slide-up').fadeOut();
      }
  });
});