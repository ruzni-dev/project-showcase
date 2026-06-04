// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = '<i class="fas fa-times"></i>';
        document.body.style.overflow = 'hidden';
    } else {
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = 'auto';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = 'auto';
            }
        }
    });
});

// Form submission handling
const reservationForm = document.querySelector('.reservation-form');
reservationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your reservation request! We will contact you shortly to confirm your booking.');
    reservationForm.reset();
});

// Menu tabs functionality
const menuTabs = document.querySelectorAll('.menu-tab');
menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        menuTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        // In a real implementation, this would filter the menu items
    });
});

// Set minimum date for reservation to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('date').setAttribute('min', today);