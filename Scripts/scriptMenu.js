const openMenuButton = document.getElementById('openMenu');
const closeMenuButton = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

function openMenu() {
  menu.style.display = 'flex';
  menu.style.right = `-${menu.offsetWidth}px`;
  openMenuButton.style.display = 'none';

  if (window.innerWidth <= 717) {
    menu.classList.add('animated-menu');
  }

  setTimeout(() => {
    menu.style.opacity = '1';
    menu.style.right = '0';
  }, 10);
}

function closeMenu() {
  menu.style.opacity = '0';
  menu.style.right = `-${menu.offsetWidth}px`;

  menu.classList.remove('animated-menu');

  setTimeout(() => {
    menu.removeAttribute('style');
    openMenuButton.removeAttribute('style');
  }, 200);
}

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);