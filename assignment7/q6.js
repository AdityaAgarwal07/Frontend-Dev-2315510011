
// Q6 Real-Time Table Filter
const students = [
  {name:'Aaryan', branch:'CSE', cgpa:8.2},
  {name:'Riya', branch:'ECE', cgpa:7.5},
  {name:'Kunal', branch:'ME', cgpa:6.8},
  {name:'Pooja', branch:'CSE', cgpa:9.0}
];
const tbody = document.querySelector('#studentsTable tbody');
const noR = document.getElementById('noResults');

function renderRows(list){
  tbody.innerHTML = '';
  if(list.length===0){ noR.classList.remove('hide'); return; } else noR.classList.add('hide');
  list.forEach(s=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${s.name}</td><td>${s.branch}</td><td>${s.cgpa}</td>`;
    tbody.appendChild(tr);
  });
}
renderRows(students);

document.getElementById('tableSearch').addEventListener('input', (e)=>{
  const q = e.target.value.toLowerCase();
  const filtered = students.filter(s=> s.name.toLowerCase().includes(q) || s.branch.toLowerCase().includes(q));
  renderRows(filtered);
});
