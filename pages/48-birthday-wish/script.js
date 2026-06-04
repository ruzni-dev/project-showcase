document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 120,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ["#4A90E2", "#7BB2FF", "#3A70B2", "#B4D0FF"]
            },
            shape: {
                type: ["circle", "polygon"],
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#4A90E2",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
    
    const giftBtn = document.getElementById('giftBtn');
    const giftContainer = document.getElementById('giftContainer');
    const box = document.getElementById('box');
    
    giftBtn.addEventListener('click', function() {
        giftContainer.style.display = 'block';
        setTimeout(function() {
            box.classList.add('open');
        }, 100);
        
        // Create confetti
        createConfetti();
        
        // Hide the button after click
        giftBtn.style.display = 'none';
        
        // Play sound
        playSound();
    });
    
    function createConfetti() {
        const confettiCount = 200;
        const container = document.querySelector('.gift-container');
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            const shapes = ['circle', 'square', 'triangle'];
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            
            const colors = ['#4A90E2', '#7BB2FF', '#3A70B2', '#B4D0FF', '#2A5090', '#FFFFFF'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.backgroundColor = color;
            
            if (shape === 'circle') {
                confetti.style.borderRadius = '50%';
            } else if (shape === 'triangle') {
                confetti.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
                confetti.style.backgroundColor = 'transparent';
                confetti.style.borderLeft = '6px solid transparent';
                confetti.style.borderRight = '6px solid transparent';
                confetti.style.borderBottom = `12px solid ${color}`;
            }
            
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = -20 + 'px';
            confetti.style.width = (Math.random() * 15 + 8) + 'px';
            confetti.style.height = (Math.random() * 15 + 8) + 'px';
            
            container.appendChild(confetti);
            
            const animationDuration = Math.random() * 3 + 2;
            
            confetti.animate([
                { 
                    transform: `translateY(0) rotate(0deg)`,
                    opacity: 1
                },
                { 
                    transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ], {
                duration: animationDuration * 1000,
                easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)',
                fill: 'forwards'
            });
        }
    }
    
    function playSound() {
        // Create audio context
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Create chime sound
        for (let i = 0; i < 3; i++) {
            setTimeout(function() {
                const oscillator = audioContext.createOscillator();
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(880 + (i * 220), audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(1760 + (i * 220), audioContext.currentTime + 0.5);
                
                const gainNode = audioContext.createGain();
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.start();
                oscillator.stop(audioContext.currentTime + 1);
            }, i * 200);
        }
    }
    
    // Add floating animation to wish cards on hover
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.animation = 'float 2s ease infinite';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.animation = 'none';
        });
    });
    
    // Add animation to name display
    const nameDisplay = document.querySelector('.name-display');
    setInterval(() => {
        nameDisplay.style.textShadow = `0 0 20px rgba(74, 144, 226, ${0.2 + Math.random() * 0.3})`;
    }, 2000);
});