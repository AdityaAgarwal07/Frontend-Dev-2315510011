// Q6 Event Subscription Panel (jQuery)
$(function(){
  const $topics = $('#topics');
  const $msgs = $('#messages');

  $topics.on('click', '.sub', function(){
    const $btn = $(this);
    if($btn.text() === 'Subscribe'){
      $btn.text('Unsubscribe').closest('.topic').addClass('subscribed');
      $msgs.append('<div class="msg">Subscribed to '+$btn.closest('.topic').text().trim()+'</div>');
    } else {
      $btn.text('Subscribe').closest('.topic').removeClass('subscribed');
      $msgs.append('<div class="msg">Unsubscribed from '+$btn.closest('.topic').text().trim()+'</div>');
    }
  });

  $('#addTopic').on('click', function(){
    const val = $('#newTopic').val().trim();
    if(!val) return;
    const $el = $('<div class="topic">'+val+' <button class="sub">Subscribe</button></div>');
    $topics.append($el);
    $('#newTopic').val('');
    $msgs.append('<div class="msg">Topic added: '+val+'</div>');
  });

  $('#messages').on('click', '.msg', function(){
    const $firstSub = $topics.find('.subscribed').first();
    if($firstSub.length){
      $firstSub.find('.sub').off('click');
      $firstSub.css('opacity',0.5);
      $msgs.append('<div class="msg">Detached events for '+$firstSub.text().trim()+'</div>');
    }
  });
});
