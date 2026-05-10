/* ==========================================
   CAROUSEL FUNCTIONALITY
   ========================================== */

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

/**
 * Change de slide dans le carrousel
 * @param {number} direction - Direction du changement (-1 pour précédent, 1 pour suivant)
 */
function changeSlide(direction) {
    // Retire la classe active du slide courant
    slides[currentSlide].classList.remove('active');
    
    // Calcule le nouvel index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    // Ajoute la classe active au nouveau slide
    slides[currentSlide].classList.add('active');
}

/**
 * Change automatiquement de slide toutes les 5 secondes
 */
setInterval(() => {
    changeSlide(1);
}, 5000);

/**
 * Gestion des événements au chargement du DOM
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser le carousel avec le premier slide actif
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }
    
    // Ajouter la classe active au lien de navigation courant
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
 * Smooth scroll pour les ancres
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

/* ==========================================
   PHOTO CAROUSEL FUNCTIONALITY
   ========================================== */

let currentPhotoSlide = 0;
const photoSlides = document.querySelectorAll('.photo-slide');
const totalPhotoSlides = photoSlides.length;

/**
 * Change de slide dans le carrousel photo
 * @param {number} direction - Direction du changement (-1 pour précédent, 1 pour suivant)
 */
function changePhotoSlide(direction) {
    // Retire la classe active du slide courant
    photoSlides[currentPhotoSlide].classList.remove('active');
    
    // Calcule le nouvel index
    currentPhotoSlide = (currentPhotoSlide + direction + totalPhotoSlides) % totalPhotoSlides;
    
    // Ajoute la classe active au nouveau slide
    photoSlides[currentPhotoSlide].classList.add('active');
}

/**
 * Initialisation du carrousel photo
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser le carousel photo avec le premier slide actif
    if (photoSlides.length > 0) {
        photoSlides[0].classList.add('active');
    }
});
