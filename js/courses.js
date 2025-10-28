document.addEventListener('DOMContentLoaded', function() {
    // Animation des éléments au chargement
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-down');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
    });
    
    setTimeout(() => {
        animatedElements.forEach(el => {
            el.style.opacity = '1';
        });
    }, 300);
    
    // Défilement fluide vers la section des cours
    const scrollButton = document.querySelector('.btn-primary-custom');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    scrollButton.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#courses').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    scrollIndicator.addEventListener('click', function() {
        document.querySelector('#courses').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Animation du scroll indicator
    setInterval(() => {
        scrollIndicator.style.animation = 'none';
        setTimeout(() => {
            scrollIndicator.style.animation = 'bounce 2s infinite';
        }, 10);
    }, 4000);
});