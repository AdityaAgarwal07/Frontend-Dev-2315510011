// Q10 Registration Form Validation (jQuery)
$(function(){
  const existing = ['test@example.com','a@b.com'];

  function showErr(name, text){
    const $inp = $('[name="'+name+'"]');
    $inp.toggleClass('invalid', !!text);
    $('.err[data-for="'+name+'"]').text(text);
  }

  $('#regForm').on('submit', function(e){
    e.preventDefault();
    const name = $('[name="name"]').val().trim();
    const email = $('[name="email"]').val().trim();
    const pass = $('[name="password"]').val();

    let ok = true;
    if(!name){ showErr('name','Name required'); ok=false; } else showErr('name','');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){ showErr('email','Invalid email'); ok=false; }
    else if(existing.includes(email)){ showErr('email','Email already taken'); ok=false; }
    else showErr('email','');

    if(pass.length < 8){ showErr('password','Min 8 chars'); ok=false; } else showErr('password','');

    if(ok){
      $('#msg').text('Success! Registration complete.');
      $('#regForm')[0].reset();
    } else {
      $('#msg').text('');
    }
  });

  $('#regForm').on('input', 'input', function(){
    const name = $('[name="name"]').val().trim();
    if(name) showErr('name','');
    const email = $('[name="email"]').val().trim();
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) showErr('email','');
    const pass = $('[name="password"]').val();
    if(pass.length >=8) showErr('password','');
  });
});
