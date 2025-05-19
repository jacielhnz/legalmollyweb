        // WhatsApp Form Submission
        function sendWhatsApp(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const plan = document.getElementById('plan').value;
            const message = document.getElementById('message').value;
            
            const text = `Hola, mi nombre es ${name}. Estoy interesado en LegalMolly - ${plan}. Correo: ${email}, Teléfono: ${phone}. ${message}`;
            
            const encodedText = encodeURIComponent(text);
            const whatsappURL = `https://wa.me/50498720406?text=${encodedText}`;
            
            window.open(whatsappURL, '_blank');
        }
        
        // Tab functionality
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                const tabId = button.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Scroll animation
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.classList.add('animated');
                }
            });
        }
        
        // Mobile menu functionality
        const menuToggle = document.querySelector('.menu-toggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMenu = document.getElementById('closeMenu');
        const overlay = document.getElementById('overlay');
        
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        overlay.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Initialize animations on load
        window.addEventListener('load', animateOnScroll);
        
        // Check animations on scroll
        window.addEventListener('scroll', animateOnScroll);
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });