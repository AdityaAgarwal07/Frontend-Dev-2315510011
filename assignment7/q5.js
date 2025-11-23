
// Q5 Image Gallery with Modal Preview
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

// use placeholder images
const imgs = [
  'https://picsum.photos/seed/1/600/400',
  'https://picsum.photos/seed/2/600/400',
  'https://picsum.photos/seed/3/600/400',
  'https://picsum.photos/seed/4/600/400',
  'https://picsum.photos/seed/5/600/400',
  'https://picsum.photos/seed/6/600/400'
];
imgs.forEach(src=>{
  const img = document.createElement('img');
  img.src = src;
  gallery.appendChild(img);
  img.addEventListener('click', (e)=>{
    modalImg.src = src;
    modal.classList.remove('hide');
  });
});

// clicking outside modal closes
modal.addEventListener('click', ()=>{
  modal.classList.add('hide');
});
// prevent clicks inside content from closing
document.querySelector('.modal-content').addEventListener('click', (e)=>e.stopPropagation());
