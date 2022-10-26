import { gsap } from "gsap";

// Burger menu init
const burgerMenu = document.getElementById("burger-menu");
const line1Menu = document.getElementById("line-1-menu");
const line2Menu = document.getElementById("line-2-menu");
const menuMobile = document.getElementById("menu-mobile");

// Timelines
let tl1 = gsap.timeline();
let tl2 = gsap.timeline();
let tl3 = gsap.timeline();

tl1.to(".gsap-title", { translateY: "0%", duration: 1.8, delay: 0.2, scale: 0.95, ease: "Expo.easeOut" })
tl1.from(".gsap-webgl", {opacity: 0, duration: 0.8}, "<0.1");
tl1.from(".gsap-hero-btn", { opacity: 0, translateY: -20, scale: 0.8}, "<0.6" )
tl1.from(".gsap-hero-side", {opacity: 0}, "<0.4");

// SVG animation
tl2.from(".gsap-rect-1", { opacity:0, scaleX: 0, scaleY: 0, stagger: 0.1 })
tl2.from(".gsap-rect-2", { opacity:0, scaleX: 0, scaleY: 0, stagger: 0.1 }, "<0.2")
tl2.from(".gsap-rect-3", { opacity:0, scaleX: 0, scaleY: 0, stagger: 0.1 }, "<0.2")
tl2.from(".gsap-rect-4", { opacity:0, scaleX: 0, scaleY: 0, stagger: 0.1 }, "<0.2")

// Burger menu animation
burgerMenu.addEventListener("click", () => {
    menuMobile.classList.toggle('hidden')
    document.body.classList.toggle('overflow-hidden');
    if(menuMobile.classList.contains('hidden')){
        tl3.to(line1Menu, {rotate: 0, duration: 0.2, translateY: 0});
        tl3.to(line2Menu, {rotate: 0, duration: 0.2, translateY: 0, width: "58%"}, "<");
    } else {
        tl3.to(line1Menu, {rotate: 45, duration: 0.2, translateY: 5});
        tl3.to(line2Menu, {rotate: -45, duration: 0.2, translateY: -10, width: "100%"}, "<");
    }
})