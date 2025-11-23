// Q8 Dynamic Blog Posts (jQuery)
$(function(){
  const $posts = $('#posts');

  $('#addPost').on('click', function(){
    $posts.append('<div class="post">New post at '+new Date().toLocaleTimeString()+'</div>');
  });

  $('#prependFeatured').on('click', function(){
    $posts.prepend('<div class="post">Featured post — '+new Date().toLocaleTimeString()+'</div>');
  });

  $('#removeLast').on('click', function(){
    $posts.children().last().remove();
  });

  $('#addTags').on('click', function(){
    $posts.find('.post').each(function(){
      $(this).append('<div class="tags">#news #update</div>');
    });
  });

  $('#highlightKeyword').on('click', function(){
    $posts.find('.post').each(function(){
      if($(this).text().indexOf('Featured') !== -1){
        $(this).css('background','lightgreen');
      }
    });
  });
});
