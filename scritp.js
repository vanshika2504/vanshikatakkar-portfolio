document.querySelector('.cta-button').addEventListener('click', function() {
    window.location.href = '#projects'; // Smooth scroll would be better
});

// Basic smooth scrolling (optional, can be enhanced)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});