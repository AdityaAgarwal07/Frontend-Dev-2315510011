
// Q3 Multi-Step Form with Validation
const multiForm = document.getElementById('multiForm');
const steps = Array.from(multiForm.querySelectorAll('.step'));
let currentStep = 0;
function showStep(i){
  steps.forEach((s,idx)=> s.classList.toggle('hide', idx!==i));
}
multiForm.addEventListener('click', (e)=>{
  if(e.target.classList.contains('next')){
    const inputs = steps[currentStep].querySelectorAll('input');
    let valid = true;
    inputs.forEach(inp=>{
      if(!inp.checkValidity()) valid = false;
    });
    if(!valid) { alert('Please fix input'); return; }
    currentStep++;
    showStep(currentStep);
  } else if(e.target.classList.contains('back')){
    currentStep = Math.max(0, currentStep-1);
    showStep(currentStep);
  }
});
multiForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  // final validation
  const formData = new FormData(multiForm);
  document.getElementById('summary').textContent =
    `Name: ${formData.get('name')} | Email: ${formData.get('email')}`;
});
