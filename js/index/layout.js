import { gsap } from "gsap";
import ScrollReveal from 'scrollreveal';

// Burger menu init
const burgerMenu = document.getElementById("burger-menu");
const line1Menu = document.getElementById("line-1-menu");
const line2Menu = document.getElementById("line-2-menu");
const menuMobile = document.getElementById("menu-mobile");

// Logo init
const logo = document.getElementById('logo');

// Timelines
let tl1 = gsap.timeline();
let tl2 = gsap.timeline();

tl1.to(".gsap-title", { translateY: "0%", duration: 1.5, delay: 0.2, scale: 0.95, ease: "Expo.easeOut" })
tl1.from(".gsap-webgl", { opacity: 0, duration: 0.8 }, "<0.1");
tl1.to(".gsap-hero-btn", { opacity: 100, top: 0, ease: "Bounce.easeOut", duration: 0.01 }, "<0.7" )
tl1.from(".gsap-hero-side", { opacity: 0 }, "<0.2");

// SVG animation
tl2.from(".gsap-rect-1", { opacity:0, scaleX: 0, scaleY: 0, stagger: 0.1 })
tl2.from(".gsap-rect-2", { opacity:0, scaleX: 0, scaleY: 0, stagger: 0.1 }, "<0.2")
tl2.from(".gsap-rect-3", { opacity:0, scaleX: 0, scaleY: 0, stagger: 0.1 }, "<0.2")
tl2.from(".gsap-rect-4", { opacity:0, scaleX: 0, scaleY: 0, stagger: 0.1 }, "<0.2")

// Logo back to home page animation
logo.addEventListener("click", () => {
    document.location.href = 'https://mxs-web.fr/';
})

// Burger menu animation
burgerMenu.addEventListener("click", () => {
    menuMobile.classList.toggle('hidden')
    document.body.classList.toggle('overflow-hidden');
    if(menuMobile.classList.contains('hidden')){
        gsap.to(line1Menu, {rotate: 0, duration: 0.2, translateY: 0});
        gsap.to(line2Menu, {rotate: 0, duration: 0.2, translateY: 0, width: "58%"}, "<");
    } else {
        gsap.to(line1Menu, {rotate: 45, duration: 0.2, translateY: 5});
        gsap.to(line2Menu, {rotate: -45, duration: 0.2, translateY: -10, width: "100%"}, "<");
    }
})

// Reset responsive menu on resize
window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 1280px)").matches) {
        if(document.body.classList.contains('overflow-hidden')){
            document.body.classList.remove('overflow-hidden');
            menuMobile.classList.add('hidden')
            gsap.to(line1Menu, {rotate: 0, duration: 0.2, translateY: 0});
            gsap.to(line2Menu, {rotate: 0, duration: 0.2, translateY: 0, width: "58%"}, "<");
        }
    }
})

// Scroll reveal
ScrollReveal({ mobile: false });
// ScrollReveal().reveal('.service1');
// ScrollReveal().reveal('.service2', {
//     delay: 200
// });
// ScrollReveal().reveal('.service3', {
//     delay: 300
// });
// ScrollReveal().reveal('.service4', {
//     delay: 400
// });
// ScrollReveal().reveal('.activity-title', {
//     distance: '-10px'
// });
// ScrollReveal().reveal('.activity-text', {
//     distance: '-10px',
//     delay: 200
// });
// ScrollReveal().reveal('.splide', {
//     scale: 0.8,
//     delay: 200
// });
// ScrollReveal().reveal('.who-am-i-title', {
//     distance: '-10px'
// });
// ScrollReveal().reveal('.who-am-i-text', {
//     distance: '-10px',
//     delay: 200
// });
// ScrollReveal().reveal('.who-am-i-bloc', {
//     scale: 0.8,
// });
// ScrollReveal().reveal('.credits-title', {
//     distance: '-10px'
// });
// ScrollReveal().reveal('.credits-text', {
//     distance: '-10px',
//     delay: 200
// });
// ScrollReveal().reveal('.credits-bloc-1', {
//     scale: 0.8,
//     delay: 200
// });
// ScrollReveal().reveal('.credits-bloc-2', {
//     scale: 0.8,
//     delay: 350
// });
// ScrollReveal().reveal('.footer-page');