// Q1 jQuery logic
$(function(){
  const hour = new Date().getHours();
  let text = "Welcome";
  if(hour < 12) text = "Good Morning";
  else if(hour < 18) text = "Good Afternoon";
  else text = "Good Evening";
  $('#greeting').text(text + ", visitor!");

  $('#greeting').on('click', function(){
    alert('Greeting clicked: ' + $(this).text());
  });

  $('#changeGreeting').on('click', function(){
    $('#greeting').text('Keep going — you are doing great!');
  });

  $('#toggleWelcome').on('click', function(){
    $('#welcomeMessage').toggle();
  });
});
