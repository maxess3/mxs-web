import { gsap } from "gsap";

let tl1 = gsap.timeline();
let tl2 = gsap.timeline();


// Hero layout animation
tl1.to(".gsap-title", { translateY: "0%", duration: 1.8, delay: 0.2, scale: 0.95, ease: "Expo.easeOut" })
tl1.from(".gsap-webgl", {opacity: 0, duration: 0.8}, "<0.1");
tl1.from(".gsap-hero-btn", { opacity: 0, translateY: -20, scale: 0.8}, "<0.6" )
tl1.from(".gsap-hero-side", {opacity: 0}, "<0.4");


// SVG animation
tl2.from(".gsap-rect-1", { opacity:0, scaleX: 0, scaleY: 0, stagger: 0.1 })
tl2.from(".gsap-rect-2", { opacity:0, scaleX: 0, scaleY: 0, stagger: 0.1 }, "<0.2")
tl2.from(".gsap-rect-3", { opacity:0, scaleX: 0, scaleY: 0, stagger: 0.1 }, "<0.2")
tl2.from(".gsap-rect-4", { opacity:0, scaleX: 0, scaleY: 0, stagger: 0.1 }, "<0.2")