
function toggleMenu() {
  document.getElementById('mainMenu').classList.toggle('show');
}


function toggleSubmenu(event) {
  event.preventDefault();
  event.stopPropagation();
  const submenu = event.target.nextElementSibling;

  if (submenu && submenu.classList.contains('submenu')) {

    submenu.classList.toggle('show');

  
    const rect = submenu.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
      submenu.style.left = 'auto';
      submenu.style.right = '0';
    } else {
      submenu.style.left = '100%';
      submenu.style.right = 'auto';
    }

 
    submenu.offsetHeight;
  }
}


document.addEventListener('click', function (e) {
  document.querySelectorAll('.submenu').forEach(menu => {
    if (!menu.contains(e.target) && !e.target.closest('.menu-item')) {
      menu.classList.remove('show');
    }
  });
});


window.addEventListener('resize', function () {
  document.querySelectorAll('.submenu').forEach(menu => {
    menu.classList.remove('show');
    menu.style.left = '';
    menu.style.right = '';
  });
});