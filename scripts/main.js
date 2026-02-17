document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Initial Hero Animation
    const tl = gsap.timeline();

    tl.from('.logo-link', { y: -50, opacity: 0, duration: 1, ease: 'power3.out' })
        .from('.nav a', { y: -50, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .from('.hero-title', { x: -100, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=0.5')
        .from('.hero-subtitle', { x: -100, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
        .from('.hero-image-wrapper', { scale: 1.2, opacity: 0, duration: 1.5, ease: 'power2.out' }, '-=1')
        .from('.hero-overlay-graphic', { scale: 0, opacity: 0, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.5');

    // Scroll Animations

    // Business Forward Section
    gsap.from('.section-header', {
        scrollTrigger: {
            trigger: '.business-forward',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from('.grid-item', {
        scrollTrigger: {
            trigger: '.business-forward',
            start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1
    });

    // Connecting World
    gsap.from('.ship-image-large', {
        scrollTrigger: {
            trigger: '.connecting-world',
            start: 'top 70%',
        },
        x: -100,
        opacity: 0,
        duration: 1
    });

    gsap.from('.connecting-text', {
        scrollTrigger: {
            trigger: '.connecting-world',
            start: 'top 70%',
        },
        x: 100,
        opacity: 0,
        duration: 1
    });

    // Features List
    gsap.from('.feature-item', {
        scrollTrigger: {
            trigger: '.features-list',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8
    });

    // Why Choose Us
    gsap.from('.why-content', {
        scrollTrigger: {
            trigger: '.why-choose-us',
            start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    // Final CTA
    gsap.from('.cta-image-group', {
        scrollTrigger: {
            trigger: '.final-cta',
            start: 'top 80%',
        },
        rotation: -10,
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
    });

    gsap.from('.cta-text-group', {
        scrollTrigger: {
            trigger: '.final-cta',
            start: 'top 80%',
        },
        x: 50,
        opacity: 0,
        duration: 1
    });
});
