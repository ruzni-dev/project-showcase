// Sidebar toggle functionality
const sidebarToggle = document.getElementById('sidebarToggle');
const container = document.querySelector('.container');
const sidebar = document.getElementById('sidebar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');

// Desktop sidebar toggle
sidebarToggle.addEventListener('click', () => {
    // Only collapse/expand on desktop
    if (window.innerWidth > 768) {
        container.classList.toggle('collapsed');
        const icon = sidebarToggle.querySelector('i');
        if (container.classList.contains('collapsed')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-chevron-right');
        } else {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-bars');
        }

        // Save sidebar state to localStorage
        const isCollapsed = container.classList.contains('collapsed');
        localStorage.setItem('sidebarCollapsed', isCollapsed);
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    mobileMenuBtn.classList.toggle('menu-open');

    const icon = mobileMenuBtn.querySelector('i');
    if (sidebar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    // Save theme preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Add active state to navigation items
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        // Close mobile menu after selection
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
            mobileMenuBtn.classList.remove('menu-open');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        }
    });
});

// Add hover effects to cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
    });
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
}

// Check for saved sidebar state
if (localStorage.getItem('sidebarCollapsed') === 'true' && window.innerWidth > 768) {
    container.classList.add('collapsed');
    const icon = sidebarToggle.querySelector('i');
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-chevron-right');
}

// Animate progress bars on page load
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        // Save original width
        const originalWidth = bar.style.width;

        // Set initial width to 0
        bar.style.width = '0';

        // Animate to original width
        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-out';
            bar.style.width = originalWidth;
        }, 300);
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (window.innerWidth <= 768) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnMenuBtn && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            mobileMenuBtn.classList.remove('menu-open');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        }
    }
});