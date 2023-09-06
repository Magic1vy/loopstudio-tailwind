const btn = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#mobile-menu')

btn.addEventListener('click', ()=>{
    btn.classList.toggle('open')
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
})