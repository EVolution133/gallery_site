$('.menu-trigger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('.wrapper').removeClass('open');
    $('.mobile_nav').removeClass('open');
    $('.overlay').removeClass('open');
  } else {
    $(this).addClass('active');
    $('.wrapper').addClass('open');
    $('.mobile_nav').addClass('open');
    $('.overlay').addClass('open');
  }
});

$('.overlay').on('click',function(){
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.menu-trigger').removeClass('active');
    $('.wrapper').removeClass('open');
    $('.mobile_nav').removeClass('open');      
  }
});
