
// Q7 Mouse Path & Coordinates Logger
const box = document.getElementById('mouseBox');
const coords = document.getElementById('coords');

box.addEventListener('mousemove', (e)=>{
  const rect = box.getBoundingClientRect();
  const x = Math.round(e.clientX - rect.left);
  const y = Math.round(e.clientY - rect.top);
  coords.textContent = `X: ${x}, Y: ${y}`;
});

box.addEventListener('dblclick', (e)=>{
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const dot = document.createElement('div');
  dot.className = 'red-dot';
  dot.style.left = x + 'px';
  dot.style.top = y + 'px';
  box.appendChild(dot);
});
