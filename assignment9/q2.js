// Q2 Product Highlight (jQuery)
$(function(){
  const $products = $('#products');

  $products.on('click', '.product', function(){
    $('.product').removeClass('highlight');
    $(this).addClass('highlight');
  });

  $products.on('mouseenter', '.product', function(){
    $(this).css('transform','scale(1.03)');
  }).on('mouseleave', '.product', function(){
    $(this).css('transform','');
  });

  $products.on('click', '.fav', function(e){
    e.stopPropagation();
    $(this).toggleClass('selected');
    if($(this).hasClass('selected')) $(this).text('♥'); else $(this).text('♡');
  });

  $products.find('[data-discount]').filter(function(){ return $(this).data('discount') !== ""; })
    .addClass('discount').css({'border-color':'green'});

  $products.on('click', '.product', function(){
    if($(this).data('stock') === 'out'){
      alert('This product is out of stock!');
    }
  });
});
