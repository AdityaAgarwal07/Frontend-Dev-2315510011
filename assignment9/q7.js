// Q7 Search Courses (jQuery)
$(function(){
  const $list = $('#courses li');
  function updateCount(){ $('#count').text('Matched: '+$list.filter(':visible').length); }

  $('#courseSearch').on('keyup', function(){
    const q = $(this).val().toLowerCase();
    $list.each(function(){
      const txt = $(this).text().toLowerCase();
      if(q && txt.indexOf(q) !== -1){
        const regex = new RegExp('('+q+')', 'ig');
        $(this).html($(this).text().replace(regex, '<span class="highlight">$1</span>'));
        $(this).show();
      } else if(q){
        $(this).hide();
      } else {
        $(this).html($(this).text());
        $(this).show();
      }
    });
    updateCount();
  });

  $('#clearSearch').on('click', function(){
    $('#courseSearch').val('');
    $list.show().each(function(){ $(this).html($(this).text()); });
    updateCount();
  });

  updateCount();
});
