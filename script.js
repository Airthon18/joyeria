function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}



let slideIndex = 0;
let autoSlideInterval;

function showSlides(index) {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = dots.length;

    // Si el índice es mayor que el número de diapositivas, volver al inicio
    if (index >= totalSlides) {
        slideIndex = 0;
    }

    // Si el índice es menor que cero, ir a la última diapositiva
    if (index < 0) {
        slideIndex = totalSlides - 1;
    }

    // Mover el contenedor de las diapositivas
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;

    // Desactivar todos los puntos y activar el punto correspondiente
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

function currentSlide(index) {
    clearInterval(autoSlideInterval); // Detener el cambio automático
    slideIndex = index;
    showSlides(slideIndex);
    autoSlideInterval = setInterval(() => nextSlide(), 3000); // Reiniciar el intervalo
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

// Iniciar la presentación de diapositivas automáticamente
autoSlideInterval = setInterval(() => nextSlide(), 3000); // Cambia cada 3 segundos


showSlides(slideIndex);
















function toggleSearchBar() {
    const searchBar = document.getElementById('searchBar');
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block';
    } else {
        searchBar.style.display = 'none';
    }
}
const tooltip = document.querySelector('.tooltip');

function toggleTooltip() {
    tooltip.classList.toggle('visible');
}

setInterval(toggleTooltip, 3000);

// CAMBIA DE IMAGEN CUANDO SE TOCA ORO AMARILLO ORO ROSA ORO BLANCO
function changeImage(imageSrc, imgId) {
    document.getElementById(imgId).src = imageSrc;
}


document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        const showDuration = 3000; // 3 seconds
        const hideDuration = 3000; // 3 seconds

        function toggleTooltip() {
            const isVisible = tooltip.style.opacity === '1';
            tooltip.style.opacity = isVisible ? '0' : '1';
        }

        setInterval(toggleTooltip, showDuration + hideDuration);
        
        // Initial visibility state
        tooltip.style.opacity = '0'; // Start hidden
    }
});













