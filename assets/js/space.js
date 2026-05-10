/**
 * Gestion du calendrier et des événements
 */

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

/**
 * Change le mois du calendrier
 */
function changeMonth(direction) {
    currentMonth += direction;
    
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    } else if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    
    updateCalendar();
}

/**
 * Met à jour l'affichage du calendrier
 */
function updateCalendar() {
    const monthYear = document.getElementById('monthYear');
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
                   'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    
    monthYear.textContent = `${months[currentMonth]} ${currentYear}`;
    
    // Générer les jours du calendrier
    const calendarGrid = document.querySelector('.calendar-grid');
    const dayHeaders = calendarGrid.querySelectorAll('.day-header');
    
    // Garder seulement les en-têtes de jour
    while (calendarGrid.children.length > 7) {
        calendarGrid.removeChild(calendarGrid.lastChild);
    }
    
    // Déterminer le premier jour du mois
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Ajouter les cases vides avant le premier jour
    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'calendar-day empty';
        calendarGrid.appendChild(emptyDiv);
    }
    
    // Ajouter les jours du mois
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        dayDiv.textContent = day;
        
        // Mettre en évidence le jour actuel
        const today = new Date();
        if (day === today.getDate() && 
            currentMonth === today.getMonth() && 
            currentYear === today.getFullYear()) {
            dayDiv.classList.add('today');
        }
        
        calendarGrid.appendChild(dayDiv);
    }
}

/**
 * Initialiser le calendrier au chargement
 */
document.addEventListener('DOMContentLoaded', function() {
    updateCalendar();
    
    // Animation des cartes
    animateCards();
});

/**
 * Animation des cartes au chargement
 */
function animateCards() {
    const cards = document.querySelectorAll('.member-access-card, .resource-card, .announcement-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}
