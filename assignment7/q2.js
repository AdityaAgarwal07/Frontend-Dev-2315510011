
// Q2 Live Character Counter
const ta = document.getElementById('charText');
const counter = document.getElementById('counter');
const resetBtn = document.getElementById('resetCnt');
const MAX = 100;

ta.addEventListener('input', (e)=>{
  const remaining = MAX - ta.value.length;
  counter.textContent = remaining;
  if(remaining <= 0){
    counter.style.background = 'red';
    // prevent further typing: truncate value
    ta.value = ta.value.slice(0, MAX);
  } else if(remaining <= 20){
    counter.style.background = 'yellow';
  } else {
    counter.style.background = '';
  }
});

resetBtn.addEventListener('click', ()=>{
  ta.value = '';
  counter.textContent = MAX;
  counter.style.background = '';
});
