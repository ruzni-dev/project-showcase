// /home/ubuntu/app/workflow_reinvention/assets/js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Handle mobile menu toggle
    const mobileMenuButton = document.querySelector('.lg\:hidden');
    
    if (mobileMenuButton) {
        // Create mobile menu container if it doesn't exist
        let mobileMenu = document.querySelector('.mobile-menu');
        
        if (!mobileMenu) {
            mobileMenu = document.createElement('div');
            mobileMenu.className = 'mobile-menu hidden fixed top-0 left-0 w-full h-full bg-white z-50 p-6 overflow-y-auto';
            
            // Create close button
            const closeButton = document.createElement('button');
            closeButton.className = 'absolute top-4 right-4 p-2 text-text-secondary hover:text-primary';
            closeButton.innerHTML = `
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            `;
            
            closeButton.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
            
            mobileMenu.appendChild(closeButton);
            
            // Create navigation links
            const nav = document.createElement('nav');
            nav.className = 'flex flex-col space-y-6 mt-12';
            
            // Get desktop navigation links and clone them
            const desktopLinks = document.querySelector('.lg\:flex.items-center.space-x-8');
            
            if (desktopLinks) {
                Array.from(desktopLinks.children).forEach(link => {
                    const newLink = link.cloneNode(true);
                    newLink.className = 'text-xl font-semibold text-text-primary hover:text-primary transition-colors duration-200';
                    nav.appendChild(newLink);
                });
            }
            
            // Add Sign In and Start Free Trial buttons
            const ctaContainer = document.createElement('div');
            ctaContainer.className = 'mt-8 flex flex-col space-y-4';
            
            const signInLink = document.createElement('a');
            signInLink.href = '#';
            signInLink.className = 'text-center text-primary hover:text-primary-700 font-semibold transition-colors duration-200 py-2';
            signInLink.textContent = 'Sign In';
            
            const freeTrialLink = document.createElement('a');
            freeTrialLink.href = '#';
            freeTrialLink.className = 'text-center btn-primary';
            freeTrialLink.textContent = 'Start Free Trial';
            
            ctaContainer.appendChild(signInLink);
            ctaContainer.appendChild(freeTrialLink);
            
            nav.appendChild(ctaContainer);
            mobileMenu.appendChild(nav);
            
            document.body.appendChild(mobileMenu);
        }
        
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Add event listeners for sign in and free trial buttons across all pages
    document.querySelectorAll('.btn-primary, a.btn-primary, button.btn-primary').forEach(button => {
        if (button.textContent.includes('Free Trial')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = '/pages/pricing_roi_focused.html';
            });
        }
    });
    
    document.querySelectorAll('button, a').forEach(element => {
        if (element.textContent.trim() === 'Sign In') {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Sign In functionality will be implemented soon.');
            });
        }
    });
});