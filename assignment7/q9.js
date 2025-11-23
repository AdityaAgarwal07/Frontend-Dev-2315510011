
// Q9 Form Submit Blocker with live errors
const form = document.getElementById('blockForm');
const msg = document.getElementById('formMsg');

function showError(name, text){
  const sp = document.querySelector(`.err[data-for="${name}"]`);
  if(sp) sp.textContent = text;
}
function clearError(name){ showError(name,''); }

form.addEventListener('input', (e)=>{
  const el = e.target;
  if(el.name === 'email'){
    if(!el.value.includes('@')) showError('email','Email must contain @'); else clearError('email');
  } else if(el.name === 'password'){
    if(el.value.length < 6) showError('password','Min 6 chars'); else clearError('password');
  } else if(el.name === 'name'){
    if(!el.value.trim()) showError('name','Required'); else clearError('name');
  }
});

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const f = new FormData(form);
  let ok = true;
  if(!f.get('name').trim()){ showError('name','Required'); ok=false; }
  if(!f.get('email').includes('@')){ showError('email','Invalid email'); ok=false; }
  if(f.get('password').length < 6){ showError('password','Too short'); ok=false; }
  if(!ok){ msg.textContent = ''; return; }
  msg.textContent = 'Form Submitted Successfully';
  form.reset();
});
