// Obtener el botón de WhatsApp
const watsapButton = document.querySelector('.watsap');

// Función para actualizar la posición del botón de WhatsApp
function updateWatsapPosition() {
    // Obtener la posición actual de desplazamiento vertical
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Ajustar la posición del botón de WhatsApp
    watsapButton.style.top = (400 + scrollY) + 'px';
}

// Escuchar el evento de desplazamiento (scroll)
window.addEventListener('scroll', updateWatsapPosition);

// Llamar a la función inicialmente para posicionar correctamente el botón
updateWatsapPosition();
