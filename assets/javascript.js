
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});
