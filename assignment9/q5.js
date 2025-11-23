// Q5 Team Members Directory (jQuery)
$(function(){
  $('.member').each(function(i){
    $(this).after('<div class="contact" style="display:none">Contact: member'+i+'@example.com</div>');
  });

  $('.manager').on('click', function(){
    const key = $(this).data('manager');
    $('.members[data-manager="'+key+'"] .member').addClass('highlight');
    setTimeout(()=>$('.member').removeClass('highlight'), 2000);
  });

  $(document).on('mouseenter', '.member', function(){
    $(this).next('.contact').show();
  }).on('mouseleave', '.member', function(){
    $(this).next('.contact').hide();
  });

  $('.department h3').on('click', function(){
    $(this).closest('.department').find('.members .member').css('background','#fff2d6');
    setTimeout(()=>$(this).closest('.department').find('.members .member').css('background',''),2000);
  });

  $('#randomEmployee').on('click', function(){
    const $members = $('.member');
    const idx = Math.floor(Math.random()*$members.length);
    const $chosen = $members.eq(idx);
    const $siblings = $chosen.siblings('.member');
    $siblings.addClass('highlight');
    setTimeout(()=>$siblings.removeClass('highlight'),2000);
  });

  let collapsed = false;
  $('#toggleTeam').on('click', function(){
    if(!collapsed){
      $('.members').hide();
      collapsed = true;
    } else {
      $('.members').show();
      collapsed = false;
    }
  });
});
