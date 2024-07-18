document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            menu.classList.add('collapsed');
        } else {
            menu.classList.remove('collapsed');
        }
    });

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('expanded');
        if (menu.classList.contains('expanded')) {
            menu.classList.remove('collapsed');
            Array.from(menu.children).forEach(child => {
                if (child.tagName === 'A') {
                    child.style.display = 'block';
                }
            });
        } else {
            Array.from(menu.children).forEach(child => {
                if (child.tagName === 'A') {
                    child.style.display = 'none';
                }
            });
            menu.classList.add('collapsed');
        }
    });
});
