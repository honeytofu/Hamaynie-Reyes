function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.ctto p');
    if (copyrightElement) {
        copyrightElement.textContent = copyrightElement.textContent.replace(/© \d{4}/, `© ${currentYear}`);
    }
}

function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active-page');
        }
    });
}

function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function addScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, { threshold: 0.1 });
    

    document.querySelectorAll('.proj-card, .info, .skills, .edu, .awards, .hobbies, .projects, .contact-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

function addContactFeedback() {
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.15s ease';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateCopyrightYear();
    highlightCurrentPage();
    enableSmoothScroll();
    addScrollAnimation();
    addContactFeedback();
});
