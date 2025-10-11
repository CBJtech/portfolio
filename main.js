 // Vanta.js background animation
        VANTA.GLOBE({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x6366f1,
            backgroundColor: 0x0f172a,
            size: 0.8
        });

        // Typing animation
        const typingText = document.querySelector('.typing-text');
        const strings = JSON.parse(typingText.getAttribute('data-strings'));
        let currentString = 0;
        let currentChar = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        let deleteSpeed = 50;
        let pauseBetween = 2000;

        function type() {
            const currentText = strings[currentString];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, currentChar - 1) + "|";
                currentChar--;
                
                if (currentChar === 0) {
                    isDeleting = false;
                    currentString = (currentString + 1) % strings.length;
                    setTimeout(type, typingSpeed);
                } else {
                    setTimeout(type, deleteSpeed);
                }
            } else {
                typingText.textContent = currentText.substring(0, currentChar + 1) + "|";
                currentChar++;
                
                if (currentChar === currentText.length) {
                    isDeleting = true;
                    setTimeout(type, pauseBetween);
                } else {
                    setTimeout(type, typingSpeed);
                }
            }
        }

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Initialize animations when page loads
        document.addEventListener('DOMContentLoaded', () => {
            feather.replace();
            type();
            
            // Animate elements when they come into view
            const animateOnScroll = () => {
                const elements = document.querySelectorAll('.section');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementPosition < windowHeight - 100) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            };
            
            // Set initial state for animations
            document.querySelectorAll('.section').forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });
            
            // Trigger animations on scroll
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); // Run once on page load
        });


// Hamburger Menu
document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.getElementById('navBar');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    if (navBar && mobileMenu && menuIcon) {
        navBar.onclick = function() {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                menuIcon.className = 'fas fa-times text-xl';
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.className = 'fas fa-bars text-xl';
            }
        };
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.className = 'fas fa-bars text-xl';
            });
        });
    }
});


// Handling form submission