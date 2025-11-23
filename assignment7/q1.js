
// Q1 Product List Manager (Event Delegation)
const pNameInput = document.getElementById('pName');
const addProductBtn = document.getElementById('addProductBtn');
const productList = document.getElementById('productList');

function createProductItem(name){
  const li = document.createElement('li');
  li.innerHTML = `<span class="title">${name}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>`;
  return li;
}

addProductBtn.addEventListener('click', ()=>{
  const name = pNameInput.value.trim();
  if(!name) return alert('Enter product name');
  productList.appendChild(createProductItem(name));
  pNameInput.value = '';
});

// Event delegation on UL
productList.addEventListener('click', (e)=>{
  const li = e.target.closest('li');
  if(!li) return;
  if(e.target.classList.contains('delete')){
    li.remove();
  } else if(e.target.classList.contains('edit')){
    enterEditMode(li);
  }
});

// inline edit and autosave on outside click
let currentEditing = null;
function enterEditMode(li){
  if(currentEditing) saveEdit(currentEditing);
  const span = li.querySelector('.title');
  const input = document.createElement('input');
  input.value = span.textContent;
  span.replaceWith(input);
  input.focus();
  currentEditing = {li, input};
}

// save function
function saveEdit(state){
  if(!state) return;
  const {li,input} = state;
  const span = document.createElement('span');
  span.className='title';
  span.textContent = input.value || 'Untitled';
  input.replaceWith(span);
  currentEditing = null;
}

// click outside to auto-save
document.addEventListener('click', (e)=>{
  if(currentEditing){
    const inside = currentEditing.li.contains(e.target);
    if(!inside) saveEdit(currentEditing);
  }
});
