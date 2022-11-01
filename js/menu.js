import { gsap } from "gsap";

// Burger menu init
const burgerMenu = document.getElementById("burger-menu");
const line1Menu = document.getElementById("line-1-menu");
const line2Menu = document.getElementById("line-2-menu");
const menuMobile = document.getElementById("menu-mobile");

// Logo init
const logo = document.getElementById('logo');

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