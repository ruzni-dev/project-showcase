document.addEventListener('DOMContentLoaded', function() {
    const giftBtn = document.getElementById('giftBtn');
    const giftContainer = document.getElementById('giftContainer');
    const box = document.getElementById('box');
    
    giftBtn.addEventListener('click', function() {
        giftContainer.style.display = 'block';
        box.classList.add('open');
        
        // Create confetti
        createConfetti();
        
        // Hide the button after click
        giftBtn.style.display = 'none';
    });
    
    function createConfetti() {
        const confettiCount = 100;
        const container = document.querySelector('.gift-container');
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            const colors = ['#D4AF37', '#FFDB87', '#AA8A2D', '#FFFFFF', '#1a1a1a'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.backgroundColor = color;
            
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = -20 + 'px';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            
            container.appendChild(confetti);
            
            const animationDuration = Math.random() * 3 + 2;
            
            confetti.animate([
                { 
                    transform: `translateY(0) rotate(0deg)`,
                    opacity: 1
                },
                { 
                    transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                }
            ], {
                duration: animationDuration * 1000,
                easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)',
                fill: 'forwards'
            });
        }
    }
});