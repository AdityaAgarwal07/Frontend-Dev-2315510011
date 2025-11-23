// Q4 Special Offer Banner (jQuery)
$(function(){
  const $banners = $('.banner');
  let slid = false;
  let faded = false;

  $('#hideBtn').on('click', function(){ $banners.hide(); });
  $('#showBtn').on('click', function(){ $banners.show(); });

  $('#slideBtn').on('click', function(){
    if(!slid){ $banners.slideUp(); slid = true; } else { $banners.slideDown(); slid = false; }
  });

  $('#fadeBtn').on('click', function(){
    if(!faded){ $banners.fadeOut(); faded = true; } else { $banners.fadeIn(); faded = false; }
  });

  let index = 0;
  setInterval(function(){
    $banners.eq(index).fadeOut(400, function(){
      index = (index +1) % $banners.length;
      $banners.eq(index).fadeIn(400);
    });
  }, 5000);
});
