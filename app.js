const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate Hero Content
gsap.from('.animate-hero', {
    duration: 0.6,
    autoAlpha: 0,
    y: -150,
    stagger: 0.2
});

// Animate Heroes Section
gsap.from('.animate-heroes', {
    duration: 0.6,
    autoAlpha: 0,
    y: -150
});

// Animate Introduction Section
gsap.from('.animate-intro', {
    scrollTrigger: {
        trigger: '.animate-intro',
        toggleActions: 'play none none none',
        once: true // Ensures animation runs only once for performance
    },
    duration: 0.5,
    autoAlpha: 0,
    x: -150,
    stagger: 0.12
});

// Animate Image
gsap.from('.animate-img', {
    scrollTrigger: {
        trigger: '.animate-img',
        toggleActions: 'play none none none',
        once: true
    },
    duration: 0.8, // Reduced duration for faster appearance
    autoAlpha: 0,
    x: -100
}); 

// Animate Rizal's Work Section
gsap.from('.animate-hisWorksec', {
    scrollTrigger: {
        trigger: '.animate-hisWorksec',
        toggleActions: 'play none none none',
        once: true
    },
    duration: 0.8,
    autoAlpha: 0,
    y: -100,
    stagger: 0.2
});

// Animate Rizal's Work Card Section
gsap.from('.animate-cardsec', {
    scrollTrigger: {
        trigger: '.animate-cardsec',
        toggleActions: 'play none none none',
        once: true
    },
    duration: 0.8,
    autoAlpha: 0,
    y: -100,
    stagger: 0.1
});

// Animate Rizal's Bibliography Section
gsap.from('.animate-bibliog', {
    scrollTrigger: {
        trigger: '.animate-bibliog',
        toggleActions: 'play none none none',
        once: true
    },
    duration: 1,
    autoAlpha: 0,
    x: 100,
    stagger: 0.1
});

// Animate Rizal's Quote Section
gsap.from('.animate-qoutes', {
    scrollTrigger: {
        trigger: '.animate-qoutes',
        toggleActions: 'play none none none',
        once: true
    },
    duration: 0.5,
    autoAlpha: 0,
    y: -100,
    stagger: 0.2
});
