burger = document.querySelector('.burger')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
navbar   = document.querySelector('.navbar')


burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})