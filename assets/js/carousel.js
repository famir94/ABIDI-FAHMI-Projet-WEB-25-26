/* ==========================================
   CAROUSEL FUNCTIONALITY
   ========================================== */

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

/**
 * Change de slide dans le carrousel
 * @param {number} direction - Direction du changement (-1 pour précédent, 1 pour suivant)
 */
function changeSlide(direction) {
    // Sécurité : si on est sur une page sans carrousel, on arrête la fonction
    if (slides.length === 0) return; 

    const totalSlides = slides.length;
    
    // Retire la classe active du slide courant
    slides[currentSlide].classList.remove('active');
    
    // Calcule le nouvel index (permet de boucler de la fin vers le début et inversement)
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    // Ajoute la classe active au nouveau slide
    slides[currentSlide].classList.add('active');
}

/**
 * Gestion des événements au chargement de la page
 */
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialiser le carousel UNIQUEMENT s'il y a des slides sur la page
    if (slides.length > 0) {
        // Met le premier slide en actif
        slides[0].classList.add('active');
        
        // Change automatiquement de slide toutes les 5 secondes
        setInterval(() => {
            changeSlide(1);
        }, 5000);
    }
    
    // Mettre à jour le lien de navigation actif dans le menu
    updateActiveNavLink();
});

/**
 * Met à jour le lien de navigation actif en fonction de la page courante
 */
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Smooth scroll pour les ancres (liens internes)
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});