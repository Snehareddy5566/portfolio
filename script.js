// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ========== NAVBAR ACTIVE LINK ==========
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#06b6d4';
        } else {
            link.style.color = '';
        }
    });
});

// ========== PARALLAX EFFECT ==========
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.image-wrapper');
    if (heroImage) {
        const scrollPosition = window.scrollY;
        heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// ========== CARD HOVER ANIMATION ==========
document.querySelectorAll('.exp-card, .project-card, .cert-card, .skill-category').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ========== SMOOTH PAGE LOAD ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.querySelector('.hero').style.opacity = '1';
    document.querySelector('.hero').style.transform = 'translateY(0)';
});

// Initial state
document.querySelector('.hero').style.opacity = '0';
document.querySelector('.hero').style.transform = 'translateY(20px)';
document.querySelector('.hero').style.transition = 'all 0.8s ease';

// ========== TYPING ANIMATION ON HERO ==========
const titleElement = document.querySelector('.hero-title');
if (titleElement) {
    const originalText = titleElement.innerHTML;
    titleElement.innerHTML = '';
    
    let charIndex = 0;
    const chars = originalText.split('');
    
    function typeChar() {
        if (charIndex < chars.length) {
            titleElement.innerHTML += chars[charIndex];
            charIndex++;
            setTimeout(typeChar, 30);
        }
    }
    
    setTimeout(typeChar, 300);
}