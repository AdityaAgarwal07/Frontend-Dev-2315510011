// Q3 Interactive FAQ (jQuery)
$(function(){
  const $faq = $('.faq');

  $faq.on('click', '.question', function(){
    $(this).next('.answer').slideToggle();
  });

  $faq.on('mouseenter', '.question', function(){
    $(this).addClass('hover');
  }).on('mouseleave', '.question', function(){
    $(this).removeClass('hover');
  });

  $faq.on('dblclick', '.question', function(){
    $faq.find('.answer').slideUp();
  });

  $faq.find('.answer').first().append('<br><input class="ans-input" placeholder="Type feedback...">');

  $faq.on('focus', '.ans-input', function(){
    $(this).closest('.item').find('.question').css('background','#fffbdd');
  });

  $faq.on('blur', '.ans-input', function(){
    $(this).closest('.item').find('.question').css('background','');
  });
});
