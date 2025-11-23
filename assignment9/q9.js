// Q9 Multi-jQuery Widgets
// Use noConflict to allow both versions to coexist.
// Load older jQuery first, then newer. Here we attempt to assign aliases.

var jQ1 = jQuery.noConflict(true); // would release both; in many browsers this requires careful ordering
// For demo fallback, if jQ1 is undefined we use window.jQuery
if(!jQ1) jQ1 = window.jQuery;
var jQ2 = window.jQuery;

jQ2(function($){
  $('#modal').on('click', function(){ alert('Modal (v2) opened'); });
  $('#tooltip').hover(function(){ $(this).attr('title','Tooltip text (v2)'); });
});

jQ1(function($){
  $('#carousel').on('click', function(){ alert('Carousel rotated (v1)'); $('#activeWidget').css('border','2px solid blue'); });
});
