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

// Animations
gsap.registerPlugin(ScrollTrigger);

// Animate Hero Content (this one is not ScrollTrigger-based)
gsap.from('.animate-hero', {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.2
});

// Animate Heroes (this one is not ScrollTrigger-based)
gsap.from('.animate-heroes', {
    duration: 0.6,
    opacity: 0,
    y: -150
});

// Animate Introduction Section
gsap.from('.animate-intro', {
    scrollTrigger: {
        trigger: '.animate-intro',
        toggleActions: 'play none none none'
    },
    duration: 0.5,
    opacity: 0,
    x: -150,
    stagger: 0.12
});

// Animate Image
gsap.from('.animate-img', {
    scrollTrigger: {
        trigger: '.animate-img',
        toggleActions: 'play none none none'
    },
    duration: 1.2,
    opacity: 0,
    x: -200
}); 

// Animate Rizal's Work Section
gsap.from('.animate-hisWorksec', {
    scrollTrigger: {
        trigger: '.animate-hisWorksec',
        toggleActions: 'play none none none'
    },
    duration: 1.2,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

// Animate Rizal's Work Card Section
gsap.from('.animate-cardsec', {
    scrollTrigger: {
        trigger: '.animate-cardsec',
        toggleActions: 'play none none none'
    },
    duration: 1.2,
    opacity: 0,
    y: -150,
    stagger: 0.1
});

// Animate Rizal's Bibliography Section
gsap.from('.animate-bibliog', {
    scrollTrigger: {
        trigger: '.animate-bibliog',
        toggleActions: 'play none none none'
    },
    duration: 1.2,
    opacity: 0,
    x: 150,
    stagger: 0.1
});

// Animate Rizal's Quote Section
gsap.from('.animate-qoutes', {
    scrollTrigger: {
        trigger: '.animate-qoutes',
        toggleActions: 'play none none none'
    },
    duration: 0.5,
    opacity: 0,
    y: -150,
    stagger: 0.25
});
