const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.fas.fa-bars');
const closeBarsMenu = document.querySelector('.close');



hamburgerIcon.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('active');
});

closeBarsMenu.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('active');
});






