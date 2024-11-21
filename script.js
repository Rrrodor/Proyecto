document.addEventListener("DOMContentLoaded", function() {
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Botón "Volver arriba"
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = '⬆️ Volver al principio';
    scrollToTopButton.id = 'scrollToTop';
    document.body.appendChild(scrollToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
