    document.addEventListener('DOMContentLoaded', () => {
        // Mobile Menu Toggle
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Mobile Toggle Animation
            const bars = mobileMenu.querySelectorAll('.bar');
            if (mobileMenu.classList.contains('active')) {
                bars[0].style.transform = 'translateY(9px) rotate(45deg)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'translateY(-9px) rotate(-45deg)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });

        // Close menu when clicking a link
        navLinks.forEach(n => n.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
            // Reset toggle Icon
            const bars = mobileMenu.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }));

        // Navbar Scroll Effect
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Reveal on Scroll Animation
        const revealElements = document.querySelectorAll('.service-card, .about-content, .feature-box, .contact-wrapper, .section-title');

        // Add reveal class initial state to these elements
        revealElements.forEach(el => el.classList.add('reveal'));

        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, {
            root: null,
            threshold: 0.15, // Trigger when 15% visible
            rootMargin: "0px"
        });

        revealElements.forEach(el => {
            sectionObserver.observe(el);
        });

        // Simple Form Submission Logic
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = contactForm.querySelector('button');
                const originalText = btn.innerText;

                // Simulating sending
                btn.innerText = 'Sending...';
                btn.style.opacity = '0.7';

                setTimeout(() => {
                    alert('Thank you! Your message has been sent successfully.');
                    contactForm.reset();
                    btn.innerText = originalText;
                    btn.style.opacity = '1';
                }, 1000);
            });
        }

        // Smooth Scrolling for Safari/Old Browsers
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
    });
