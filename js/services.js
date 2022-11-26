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
    document.location.href = 'https://mxs-web.fr/';
});

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
});

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
});

// Filter services
const filterAllBtn = document.getElementById('filter-all');
const filterAvailableBtn = document.getElementById('filter-available');
const filterContainerBtn = document.querySelectorAll('.service');

filterAllBtn.addEventListener('click', () => {
for(let i = 0; i < filterContainerBtn.length; i++){
        if(filterContainerBtn[i].classList.contains('hidden')){
            filterContainerBtn[i].classList.remove('hidden');
        }
    filterAvailableBtn.style.opacity = "0.6";
    filterAvailableBtn.classList.replace('bg-light-blue', 'bg-[#17348a]');
    filterAllBtn.classList.replace('bg-[#17348a]', 'bg-light-blue');
    filterAllBtn.style.opacity = "1";
}})

filterAvailableBtn.addEventListener('click', () => {
    for(let i = 0; i < filterContainerBtn.length; i++){
        if(!filterContainerBtn[i].classList.contains('service-available')){
            filterContainerBtn[i].classList.add('hidden');
        }
    }
    filterAvailableBtn.style.opacity = "1";
    filterAvailableBtn.classList.replace('bg-[#17348a]','bg-light-blue');
    filterAllBtn.classList.replace('bg-light-blue', 'bg-[#17348a]');
    filterAllBtn.style.opacity = "0.6";
})