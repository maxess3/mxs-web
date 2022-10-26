import { gsap } from "gsap";

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

tl1.to(".gsap-title", { translateY: "0%", duration: 1.8, delay: 0.2, scale: 0.95, ease: "Expo.easeOut" })
tl1.from(".gsap-webgl", {opacity: 0, duration: 0.8}, "<0.1");
tl1.from(".gsap-hero-btn", { opacity: 0, translateY: -20, scale: 0.8}, "<0.6" )
tl1.from(".gsap-hero-side", {opacity: 0}, "<0.4");

// SVG animation
tl2.from(".gsap-rect-1", { opacity:0, scaleX: 0, scaleY: 0, stagger: 0.1 })
tl2.from(".gsap-rect-2", { opacity:0, scaleX: 0, scaleY: 0, stagger: 0.1 }, "<0.2")
tl2.from(".gsap-rect-3", { opacity:0, scaleX: 0, scaleY: 0, stagger: 0.1 }, "<0.2")
tl2.from(".gsap-rect-4", { opacity:0, scaleX: 0, scaleY: 0, stagger: 0.1 }, "<0.2")

// Logo back to home page animation
logo.addEventListener("click", () => {
    document.location.href = 'index.html';
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