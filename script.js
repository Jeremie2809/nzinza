// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const nav = document.getElementById('nav');

mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation classes and observe elements
const animateElements = document.querySelectorAll('.class-card, .learning-point, .team-text, .education-image, .contact-method');
animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
    observer.observe(el);
});

// Class cards hover effect enhancement
const classCards = document.querySelectorAll('.class-card');
classCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Learning points sequential animation
const learningPoints = document.querySelectorAll('.learning-point');
const learningObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const points = entry.target.parentNode.querySelectorAll('.learning-point');
            points.forEach((point, index) => {
                setTimeout(() => {
                    point.style.opacity = '1';
                    point.style.transform = 'translateX(0)';
                }, index * 200);
            });
        }
    });
}, { threshold: 0.5 });

if (learningPoints.length > 0) {
    learningPoints.forEach(point => {
        point.style.opacity = '0';
        point.style.transform = 'translateX(-30px)';
        point.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    learningObserver.observe(learningPoints[0]);
}

// Counter animation for point numbers
const pointNumbers = document.querySelectorAll('.point-number');
const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target;
            const targetNum = parseInt(number.textContent);
            let currentNum = 0;
            
            const counter = setInterval(() => {
                currentNum++;
                number.textContent = currentNum.toString().padStart(2, '0');
                
                if (currentNum === targetNum) {
                    clearInterval(counter);
                }
            }, 100);
        }
    });
}, { threshold: 0.8 });

pointNumbers.forEach(number => {
    numberObserver.observe(number);
});

// Add floating animation to geometric shapes
const geometricShapes = document.querySelectorAll('.geometric-shape');
geometricShapes.forEach((shape, index) => {
    shape.addEventListener('mouseenter', () => {
        shape.style.transform = 'scale(1.2) rotate(10deg)';
        shape.style.transition = 'transform 0.3s ease';
    });
    
    shape.addEventListener('mouseleave', () => {
        shape.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.geometric-shape, .decorative-elements .element');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform += ` translateY(${scrolled * speed}px)`;
    });
});

// Add click effect to WhatsApp buttons
const whatsappButtons = document.querySelectorAll('.whatsapp-button, .whatsapp-chat a');
whatsappButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize character animation
const character = document.querySelector('.character');
if (character) {
    character.addEventListener('click', () => {
        character.style.animation = 'none';
        setTimeout(() => {
            character.style.animation = 'wave 2s ease-in-out infinite';
        }, 10);
    });
}

// Social icons hover effect
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-3px) rotate(10deg)';
        icon.style.boxShadow = '0 5px 15px rgba(255, 255, 255, 0.3)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0) rotate(0deg)';
        icon.style.boxShadow = 'none';
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Create WhatsApp message
        const whatsappMessage = `Bonjour, je suis ${name}. Email: ${email}. Message: ${message}`;
        const whatsappUrl = `https://wa.me/+243000000000?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Message envoyé!';
        submitBtn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, #EC4899 0%, #22C55E 100%)';
        }, 3000);
    });
}

// WhatsApp chat button animation on page load
window.addEventListener('load', () => {
    const whatsappChat = document.getElementById('whatsapp-chat');
    setTimeout(() => {
        whatsappChat.style.animation = 'pulse 2s infinite, slideInUp 0.5s ease-out';
    }, 2000);
});

// Add slideInUp animation
const slideUpStyle = document.createElement('style');
slideUpStyle.textContent = `
    @keyframes slideInUp {
        from {
            transform: translateY(100px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(slideUpStyle);

console.log('Site NZILA ya zayi chargé avec succès! 🌈✨');