// script.js

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu');
    const menuLinks = document.querySelector('.midde');

    menuIcon.addEventListener('click', function() {
        menuLinks.classList.toggle('active');
    });
});
