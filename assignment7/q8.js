
// Q8 Custom Dropdown using capturing phase for close
const dropBtn = document.getElementById('dropBtn');
const options = document.querySelector('#customDropdown .options');

dropBtn.addEventListener('click', (e)=>{
  options.classList.toggle('hide');
});

// option selection
options.addEventListener('click', (e)=>{
  if(e.target.classList.contains('option')){
    dropBtn.textContent = e.target.textContent;
    options.classList.add('hide');
  }
});

// clicking outside closes - using capturing
document.addEventListener('click', (e)=>{
  if(!document.getElementById('customDropdown').contains(e.target)){
    options.classList.add('hide');
  }
}, true);
