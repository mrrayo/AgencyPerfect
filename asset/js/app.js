const menu = document.querySelector('.menu-area');
const bar  = document.querySelector('.collapse');
bar.addEventListener('click',()=>{
    menu.classList.toggle('menu-active');
    bar.classList.toggle('active');
});