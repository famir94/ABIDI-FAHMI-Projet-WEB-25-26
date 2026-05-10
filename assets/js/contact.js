/**
 * Gestion du formulaire de contact
 */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit();
        });

        // Ajouter la validation en temps réel
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        nameInput.addEventListener('blur', validateName);
        emailInput.addEventListener('blur', validateEmail);
        messageInput.addEventListener('blur', validateMessage);
    }
});

/**
 * Valide le nom
 */
function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    
    if (nameInput.value.trim().length < 3) {
        nameError.textContent = 'Le nom doit contenir au moins 3 caractères';
        nameInput.classList.add('input-error');
        return false;
    } else {
        nameError.textContent = '';
        nameInput.classList.remove('input-error');
        return true;
    }
}

/**
 * Valide l'email
 */
function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Veuillez entrer une adresse email valide';
        emailInput.classList.add('input-error');
        return false;
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('input-error');
        return true;
    }
}

/**
 * Valide le message
 */
function validateMessage() {
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    
    if (messageInput.value.trim().length < 10) {
        messageError.textContent = 'Le message doit contenir au moins 10 caractères';
        messageInput.classList.add('input-error');
        return false;
    } else {
        messageError.textContent = '';
        messageInput.classList.remove('input-error');
        return true;
    }
}

/**
 * Traite la soumission du formulaire
 */
function handleFormSubmit() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    
    if (isNameValid && isEmailValid && isMessageValid) {
        const formMessage = document.getElementById('formMessage');
        formMessage.textContent = 'Message envoyé avec succès! Nous vous répondrons dans les 48h.';
        formMessage.className = 'form-message success-message';
        
        // Réinitialiser le formulaire après 2 secondes
        setTimeout(() => {
            document.getElementById('contactForm').reset();
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 2000);
    }
}
