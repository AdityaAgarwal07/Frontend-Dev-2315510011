
// Q4 Theme Switcher using setAttribute and data-theme
document.querySelectorAll('[data-theme]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const theme = btn.getAttribute('data-theme');
    document.body.setAttribute('data-theme', theme);
    // also save state in custom attribute (redundant but as requested)
    document.body.setAttribute('data-theme', theme);
  });
});
// initialize default
if(!document.body.getAttribute('data-theme')) document.body.setAttribute('data-theme','light');
