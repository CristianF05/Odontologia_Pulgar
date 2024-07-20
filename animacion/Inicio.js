document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll('.menu a');
    let activeLink = null;

    menuLinks.forEach(link => {
        if (link.href.includes(currentPath)) {
            link.classList.add('active');
            activeLink = link;
        }

        link.addEventListener('mouseover', function() {
            if (activeLink) {
                activeLink.classList.remove('active');
            }
            this.classList.add('hover');
        });

        link.addEventListener('mouseout', function() {
            this.classList.remove('hover');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        });
    });
});