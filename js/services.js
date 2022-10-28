import './menu.js';

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
    filterAllBtn.style.opacity = "1";
}})

filterAvailableBtn.addEventListener('click', () => {
    for(let i = 0; i < filterContainerBtn.length; i++){
        if(!filterContainerBtn[i].classList.contains('service-available')){
            filterContainerBtn[i].classList.add('hidden');
        }
    }
    filterAvailableBtn.style.opacity = "1";
    filterAllBtn.style.opacity = "0.6";
})