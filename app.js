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
gsap.registerPlugin(ScrollTrigger)

// Animate Hero Content
gsap.from('.animate-hero', {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.2
});

// animate-heroes
gsap.from('.animate-heroes', {
    duration: 0.6,
    opacity: 0,
    y: -150
});

// Animate Introduction Section
gsap.from('.animate-intro', {
    scrollTrigger: {
        trigger: '.animate-intro',
        toggleActions: 'play none none reset' // Ensures the animation resets every time you leave and re-enter the section
    },
    duration: 0.5,
    opacity: 0, // Start from opacity 0 to ensure fade-in effect
    x: -150,
    stagger: 0.12
});

// Animate Image
gsap.from('.animate-img', {
    scrollTrigger: {
        trigger: '.animate-img',
        toggleActions: 'play none none reset' // Ensures the animation resets every time you leave and re-enter the section
    },
    duration: 1.2,
    opacity: 0, // Start from opacity 0 to ensure fade-in effect
    x: -200
}); 

// Animate Rizal's work section
gsap.from('.animate-hisWorksec', {
    scrollTrigger: {
        trigger: '.animate-hisWorksec',
        toggleActions: 'play none none reset' // Ensures the animation resets every time you leave and re-enter the section
    },
    duration: 1.2,
    opacity: 0, // Start from opacity 0 to ensure fade-in effect
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

// Animate Rizal's work card section
gsap.from('.animate-cardsec', {
    scrollTrigger: {
        trigger: '.animate-cardsec',
        toggleActions: 'play none none reset' // Ensures the animation resets every time you leave and re-enter the section
    },
    duration: 1.2,
    opacity: 0, // Start from opacity 0 to ensure fade-in effect
    y: -150,
    stagger: 0.1,
    delay: 0.2
});

// Animate Rizal's bibliography section
gsap.from('.animate-bibliog', {
    scrollTrigger: {
        trigger: '.animate-bibliog',
        toggleActions: 'play none none reset' // Ensures the animation resets every time you leave and re-enter the section
    },
    duration: 1.2,
    opacity: 0, // Start from opacity 0 to ensure fade-in effect
    x: 150,
    stagger: 0.1,
    delay: 0.2
});

// Animate Rizal's quote section
gsap.from('.animate-qoutes', {
    scrollTrigger: {
        trigger: '.animate-qoutes',
        toggleActions: 'play none none reset' // Ensures the animation resets every time you leave and re-enter the section
    },
    duration: 0.5,
    opacity: 0, // Start from opacity 0 to ensure fade-in effect
    y: -150,
    stagger: 0.25,
    delay: 0.4
});
