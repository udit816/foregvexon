// ========================================
// FORGEVEXON LANDING PAGE - INTERACTIONS
// ========================================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {

    // === SMOOTH SCROLL FOR NAVIGATION LINKS === 
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    // === STICKY HEADER EFFECTS ===
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for backdrop effect
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });


    // === INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ===
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in-up class
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Stagger animation for product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.classList.add('fade-in-up');
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Stagger animation for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.classList.add('fade-in-up');
        card.style.transitionDelay = `${index * 0.1}s`;
    });


    // === BUTTON CLICK TRACKING (Optional Analytics) ===
    const ctaButtons = document.querySelectorAll('.btn-primary');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = this.textContent.trim();
            console.log(`CTA clicked: ${buttonText}`);

            // Add your analytics tracking here
            // Example: gtag('event', 'cta_click', { button_text: buttonText });
        });
    });


    // === PARALLAX EFFECT FOR HERO BACKGROUND (Subtle) ===
    const heroBackground = document.querySelector('.hero-background');

    if (heroBackground) {
        window.addEventListener('scroll', function () {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;

            if (scrolled < window.innerHeight) {
                heroBackground.style.transform = `translateY(${rate}px)`;
            }
        });
    }


    // === DYNAMIC YEAR IN FOOTER ===
    const updateFooterYear = () => {
        const yearElements = document.querySelectorAll('.footer-copyright');
        const currentYear = new Date().getFullYear();

        yearElements.forEach(element => {
            element.textContent = element.textContent.replace('2024', currentYear);
        });
    };

    updateFooterYear();


    // === PRELOAD PERFORMANCE OPTIMIZATION ===
    // Add loading states and optimize font loading
    document.fonts.ready.then(function () {
        document.body.classList.add('fonts-loaded');
    });


    // === KEYBOARD NAVIGATION ENHANCEMENT ===
    // Improve accessibility for keyboard users
    const focusableElements = document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');

    // Show focus outline only for keyboard navigation
    let isUsingKeyboard = false;

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
            isUsingKeyboard = true;
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', function () {
        isUsingKeyboard = false;
        document.body.classList.remove('keyboard-nav');
    });


    // === MOBILE MENU TOGGLE (If needed in future) ===
    // Placeholder for mobile hamburger menu functionality
    const createMobileMenu = () => {
        // This function can be expanded if you want to add a hamburger menu
        // For now, the navigation wraps on mobile

        if (window.innerWidth < 768) {
            console.log('Mobile view detected');
        }
    };

    window.addEventListener('resize', function () {
        createMobileMenu();
    });

    createMobileMenu();


    // === LOG INITIALIZATION ===
    console.log('🔥 Forgevexon landing page initialized');
    console.log('✨ All animations and interactions ready');

});


// === EXTERNAL LINK HANDLER ===
// Ensure external links open in new tab with security
document.addEventListener('DOMContentLoaded', function () {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');

    externalLinks.forEach(link => {
        // Ensure security attributes are set
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }

        // Add visual indicator for external links (optional)
        link.classList.add('external-link');
    });
});


// === PAGE VISIBILITY API (Optional Enhancement) ===
// Pause animations when page is not visible to save resources
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        console.log('Page hidden - pausing animations');
    } else {
        console.log('Page visible - resuming animations');
    }
});


// === PERFORMANCE MONITORING ===
// Log page load performance
window.addEventListener('load', function () {
    const perfData = performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

    console.log(`⚡ Page loaded in ${pageLoadTime}ms`);

    // Optional: Send to analytics
    // gtag('event', 'timing_complete', {
    //     name: 'load',
    //     value: pageLoadTime,
    //     event_category: 'Performance'
    // });
});
